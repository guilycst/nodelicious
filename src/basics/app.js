const fs = require('fs');
const os = require('os');
const directory = '../../output/basics'
fs.mkdir()
fs.writeFile('../../output/basics/file.json',JSON.stringify(os.cpus()),() => {
    console.log("File written");
});