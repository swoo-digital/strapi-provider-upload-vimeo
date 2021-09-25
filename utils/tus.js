const tus = require('tus-js-client');

function UploadVideoTusJs(uploadUrl, videoFile) {
    return new Promise((resolve, reject) => {
        
        var upload = new tus.Upload(videoFile, {
            uploadUrl: uploadUrl,
            onError: function (error) {
                reject(error);
            },
            onSuccess: function (data) {
                resolve(data);
            }
        });

        upload.start();

    });
}

module.exports = {UploadVideoTusJs};