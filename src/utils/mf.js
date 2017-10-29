const fs = require('fs');

module.exports = new MakeFile();

const fileRegx = /^(.*)(\\|\/)(\w+\.\w+)$/;

class MakeFile {

    writeFile(file, data) {
        return new Promise((resolve, reject) => {
            let result = meta(file);
            fs.mkdir(result.absolute, (err) => {
                if (err) {
                    reject(err)
                } else {
                    fs.writeFile(file, data, resolve)
                }
            })
        });
    }

    meta(filePath) {
        let result = filePath.match(fileRegx);
        if (result) {
            return {
                dir: result[1] + result[2],
                fileName: result[3],
                absolute: result[0]
            }
        }
    }

}
