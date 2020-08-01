const util = require('util')
const exec = util.promisify(require('child_process').exec)
var path = require('path');

const readJar = async () => {
    const nwPath = path.resolve("public"); 
    var jarPath = nwPath + '\\HelloWorld.jar arg1';
    const { stdout, stderr } = await exec( 'java -jar '+ jarPath)
    console.log('stdout:', stdout);
    if(stderr) console.error('stderr:', stderr);
    return stdout
}

module.exports = {
    readJar : readJar
}