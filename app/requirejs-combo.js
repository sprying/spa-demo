/**
 * Created by sprying.fang@gmail.com on 2017/7/15.
 */

;(function () {
  var _load = require.load

  require.load = (function () {

    // requirejs 要load的module先暂存
    var modsCache = []
    var timer
    var comboHash = {}

    var comboSyntax = ["??", ","]
    var comboMaxLength = 2000
    var comboExcludes
    var comboSuffix

    var finalUrls = []


    function setComboHash(mods) {
      paths2combo(uris2paths(mods))
    }

    function uris2paths(mods) {
      return meta2paths(uris2meta(mods))
    }

// [
//   [[context], [moduleName], "//example.com/p/a.js"],
//   [[context], [moduleName], "//example2.com/b.js"],
//   [[context], [moduleName], "//example.com/p/c/d.js"],
//   [[context], [moduleName], "//example.com/p/c/e.js"]
// ]
// ==>
// {
//   "__example.com": {
//                          "p": {
//                                 "a.js": { __KEYS: [] ,context: [context], moduleName: [moduleName]},
//                                 "c": {
//                                        "d.js": { __KEYS: [] ,context: [context], moduleName: [moduleName]},
//                                        "e.js": { __KEYS: [] ,context: [context], moduleName: [moduleName]},
//                                        __KEYS: ["d.js", "e.js"]
//                                 },
//                                 __KEYS: ["a.js", "c"]
//                               },
//                          __KEYS: ["p"]
//                        },
//   "__example2.com": {
//                            "b.js": { __KEYS: [] ,context: [context], moduleName: [moduleName]},
//                            _KEYS: ["b.js"]
//                          },
//   __KEYS: ["__example.com", "__example2.com"]
// }

    function uris2meta(mods) {
      var meta = {
        __KEYS: []
      }

      for (var i = 0, len = mods.length; i < len; i++) {
        var uri = mods[i][2]
        var parts = uri.replace("//", "__").split("/")
        var m = meta

        for (var j = 0, l = parts.length; j < l; j++) {
          var part = parts[j]

          if (!m[part]) {

            if (j == l - 1) {
              m[part] = {
                __KEYS: [],
                context: mods[i][0],
                moduleName: mods[i][1]
              }
            } else {
              m[part] = {
                __KEYS: []
              }
            }
            m.__KEYS.push(part)
          }
          m = m[part]
        }
      }

      return meta
    }

// {
//   "__example.com": {
//                          "p": {
//                                 "a.js": { __KEYS: [] ,context: [context], moduleName: [moduleName]},
//                                 "c": {
//                                        "d.js": { __KEYS: [] ,context: [context], moduleName: [moduleName]},
//                                        "e.js": { __KEYS: [] ,context: [context], moduleName: [moduleName]},
//                                        __KEYS: ["d.js", "e.js"]
//                                 },
//                                 __KEYS: ["a.js", "c"]
//                               },
//                          __KEYS: ["p"]
//                        },
//   "__example2.com": {
//                            "b.js": { __KEYS: [] ,context: [context], moduleName: [moduleName]},
//                            _KEYS: ["b.js"]
//                          },
//   __KEYS: ["__example.com", "__example2.com"]
// }
// ==>
// [
//   ["//example.com/p", [[[context], [moduleName], "a.js"], [[context], [moduleName], "c/d.js"], [[context], [moduleName], "c/e.js"]]],
//   ["//example2.com/b.js", [[[context]], [moduleName], 0]]
// ]

    function meta2paths(meta) {
      var paths = []
      var __KEYS = meta.__KEYS

      for (var i = 0, len = __KEYS.length; i < len; i++) {
        var part = __KEYS[i]
        var root = part
        var m = meta[part]
        var KEYS = m.__KEYS

        while (KEYS.length === 1) {
          root += "/" + KEYS[0]
          m = m[KEYS[0]]
          KEYS = m.__KEYS
        }

        if (KEYS.length) {
          paths.push([root.replace("__", "//"), meta2arr(m)])
        } else {
          paths.push([root.replace("__", "//"), [[m['context'], m['moduleName'], 0]]])
        }
      }

      return paths
    }

// {
//   "a.js": { __KEYS: [] ,context: [context], moduleName: [moduleName]},
//   "c": {
//          "d.js": { __KEYS: [] ,context: [context], moduleName: [moduleName]},
//          "e.js": { __KEYS: [] ,context: [context], moduleName: [moduleName]},
//          __KEYS: ["d.js", "e.js"]
//        },
//   __KEYS: ["a.js", "c"]
// }
// ==>
// [
//   [[context], [moduleName], "a.js"], [[context], [moduleName], "c/d.js"], [[context], [moduleName], "c/e.js"]
// ]

    function meta2arr(meta) {
      var arr = []
      var __KEYS = meta.__KEYS

      for (var i = 0, len = __KEYS.length; i < len; i++) {
        var key = __KEYS[i]
        var r = meta2arr(meta[key])

        // key = "c"
        // r = ["d.js", "e.js"]
        var m = r.length
        if (m) {
          for (var j = 0; j < m; j++) {
            arr.push([r[j][0], r[j][1], key + "/" + r[j][2]])
          }
        } else {
          arr.push([meta[key]['context'], meta[key]['moduleName'], key])
        }
      }

      return arr
    }

// [
//   ["//example.com/p", [[[context], [moduleName], "a.js"], [[context], [moduleName], "c/d.js"], [[context], [moduleName], "c/e.js"]]],
//   ["//example2.com/b.js", [[[context]], [moduleName], 0]]
// ]
// ==>
//
//
// "//example.com/p/??a.js,c/d.js,c/e.js"
// "//example2.com/b.js"
//

    function paths2combo(paths) {
      for (var i = 0, len = paths.length; i < len; i++) {
        var path = paths[i]
        var root = path[0] + "/"
        genComboPath(root, path[1])
      }
    }

    function genComboPath(root, files) {
      var copy = []
      if (files.length == 1) {
        comboPath = root
        if (comboSuffix) {
          comboPath += comboSuffix
        }
        finalUrls.push([files[0][0], files[0][1], comboPath.substring(0, comboPath.length - 1)])
        return
      }
      for (var i = 0, len = files.length; i < len; i++) {
        copy[i] = files[i][2].replace(/\?.*$/, '')
      }
      var comboPath = root + comboSyntax[0] + copy.join(comboSyntax[1])
      if (comboSuffix) {
        comboPath += comboSuffix
      }
      var exceedMax = comboPath.length > comboMaxLength

      // http://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url
      if (files.length > 1 && exceedMax) {
        var parts = splitFiles(files,
          comboMaxLength - (root + comboSyntax[0]).length)

        setHash(root, parts[0])
        setHash(root, parts[1])
      } else {
        if (exceedMax) {
          throw new Error("The combo url is too long: " + comboPath)
        }


        var file = files[files.length - 1]
        finalUrls.push([file[0], file[1], comboPath])
      }
    }

    function splitFiles(files, filesMaxLength) {
      var sep = comboSyntax[1]
      var s = files[0]

      for (var i = 1, len = files.length; i < len; i++) {
        s += sep + files[i]
        if (s.length > filesMaxLength) {
          return [files.splice(0, i), files]
        }
      }
    }


    return function (context, moduleName, url) {
      var comboExcludes = require.s.contexts._.config.comboExcludes || []
      modsCache.push(arguments)
      !timer && (timer = setTimeout(function () {
        var normalReq = []

        function filterNotCombo(mods) {
          for (var i = 0, len = mods.length; i < len; i++) {
            for (var j = 0, l = comboExcludes.length; j < l; j++) {
              if (mods[i][2].indexOf(comboExcludes[j]) > -1) {
                normalReq.push(mods[i])
                mods.splice(i, 1)
                len--
                i--
                break
              }
            }
          }

          if (mods.length == 1) {
            normalReq.push(mods[0])
            mods.splice(0, 1)
          }
        }

        filterNotCombo(modsCache)

        if (modsCache.length > 1) {
          setComboHash(modsCache)
          for (var i = 0, len = finalUrls.length; i < len; i++) {
            _load.apply(require, finalUrls[i])
          }
        }
        if (normalReq.length) {
          for (var i = 0, len = normalReq.length; i < len; i++) {
            _load.apply(require, normalReq[i])
          }
        }

        modsCache = []
        comboHash = {}
        finalUrls = []
        normalReq = []
        clearTimeout(timer)
        timer = 0
        // req.load = _load
      }, 0))
    }
  })()

})()
