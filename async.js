let fs = require('node:fs/promises');

const json = response => Promise.resolve(JSON.parse(response));

function loadDistantFile(jsonData) {
    return new Promise(function (resolve, reject) {
        fs.readFile(jsonData)
            .then(json)
            .then(data => {
                console.log('Request succeeded with JSON response', data)
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
    }
    )
};

module.exports = {
    loadDistantFile: loadDistantFile
}; //ou module.exports.sum=sum;

