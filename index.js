const Vimeo = require('./utils/upload.js');

module.exports = {
  init(config) {
    var client = new Vimeo(config.clientId, config.clientSecret, config.accessToken);

    return {
      upload(file) {
        return new Promise((resolve, reject) => {
        client.uploadFromBinary(
          {
            video: file.buffer,
            name: file.hash+file.ext,
            description: file.alternativeText,    
          }).then(res =>{
            file.url = res.data.link
            console.log(file.url);
            resolve()
          }).catch(err => {
            console.log(err);
            reject()
          });
        })
      },
      delete(file) {
        console.log('/videos/'+file.url.split('/')[3])
        client.vimeoClient.request( {
          method: 'DELETE',
          path: '/videos/'+file.url.split('/')[3]
        },  function (error, body, status_code, headers) {
          if (error) {
            console.log(error);
          } 
        });
      },
    };
  },
};
