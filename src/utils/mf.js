//mf == make files
module.exports = (function () {
    return {
        writeFile,
        meta
    }
}());

const fileRe = /^(.*)\\|\/(\w+\.\w+)$/;

function writeFile(file, data) {
    let result;
    if (result = file.match(fileRe)) {
        let dir = result[2];
        let fileName = result[2];
    }
}


function meta(filePath) {
    let result = filePath.match(fileRe);
    if (result) {
        return {
            dir: result[1],
            fileName: result[2]
        }
    }
}