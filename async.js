let fs = require('node:fs/promises');

const json = response => Promise.resolve(JSON.parse(response));

function loadDistantFile(jsonDataURL) {
    return new Promise(function (resolve, reject) {
        fs.readFile(jsonDataURL)
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

