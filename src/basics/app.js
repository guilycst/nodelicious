const fs = require('fs');
const os = require('os');

fs.writeFile('../../output/basics/file.json',JSON.stringify(os.cpus()),() => {
    console.log("File written");
});