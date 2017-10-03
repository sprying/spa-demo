//指定不处理的js文件，有些外面引入的库文件本身包含define之类的
var excludeTmplFolders = [
    'app/boot',
    'app/require-config',
    'app/requirejs-magix',
    'app/requirejs-combo',
    'build'
]
var srcFolder = 'app' //source folder
var buildFolder = 'build/app' //build folder

var config = {
    excludeTmplFolders: excludeTmplFolders,
    outputTmplWithEvents: true,
    //md5KeyLen:10,
    //cssSelectorPrefix: 'xy-',
    tmplFolder: srcFolder,
    srcFolder: buildFolder,
    //buildFolder: buildDest,
    loaderType: 'amd',
    addEventPrefix: false,
    disableMagixUpdater: true

    // useMagixTmplAndUpdater: true
}

module.exports = config