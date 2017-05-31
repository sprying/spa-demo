'use strict'
//指定不处理的js文件，有些外面引入的库文件本身包含define之类的
let excludeTmplFolders = [
    'app/boot',
  'app/require-config-combo',
  'app/requirejs-magix',
    'build/boot'
]
let srcFolder = 'app' //source folder
let buildFolder = 'build/app' //build folder
let vueClassReg = /:class\s*=\s*"\{([^"]+?)\}"/g
let vueClassKeyReg = /(')?(\w+)\1\s*:/g

let config = {
    excludeTmplFolders: excludeTmplFolders,
    outputTmplWithEvents: true,
    //md5KeyLen:10,
    //cssSelectorPrefix: 'xy-',
    tmplFolder: srcFolder,
    srcFolder: buildFolder,
    //buildFolder: buildDest,
    loaderType: 'amd',
    addEventPrefix: false,
    disableMagixUpdater: true,
    cssNamesProcessor: function(attrs, cssNames) {
        //console.log(attrs,cssNames);
        attrs = attrs.replace(vueClassReg, function(match, content) {
            content = content.replace(vueClassKeyReg, function(m, q, key) {
                key = cssNames[key] || key;
                return (q || '') + key + (q || '') + ':';
            });
            return ':class="{' + content + '}"';
        });
        return attrs;
    }

    // useMagixTmplAndUpdater: true
}

module.exports = config