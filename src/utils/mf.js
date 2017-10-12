//mf == make files
module.exports.mf = () => ({
    writeFile,
    meta
});

const fileRe = /^(.*)\\|\/(\w+\.\w+)$/;

function writeFile(file, data, options = {
    mkdir = true
}) {
    let result;
    if (result = file.match(fileRe)) {
        let dir = result[2];
        let fileName = result[2];

    }
}


function meta(filePath) {
    let result = file.match(fileRe);
    if (result) {
        return {
            dir: result[1],
            fileName: result[2]
        }
    }
}