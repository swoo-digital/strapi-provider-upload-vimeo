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
            name: file.hash,
            description: file.alternativeText,    
          }).then(res =>{
            if(config.premium){
            client.getFromId(res.data.uri)
            .then(res => {
              file.url = res.data.download[0].link
              file.width = res.data.width
              file.height = res.data.height
              file.provider_metadata =  {
                "link":res.data.link,
                "files":res.data.files,
                "download":res.data.download
              }
              resolve()
            }).catch(err =>{
              console.log("get",err)
              reject()
            })
          }else{
            file.url = res.data.link
            resolve()
          }
          }).catch(err => {
            console.log(err);
            reject()
          });
        })
      },
      delete(file) {
        str = file.url
        client.vimeoClient.request( {
          method: 'DELETE',
          path: '/videos/'+str.substring(
            str.indexOf("?s=") + 3, 
            str.indexOf("_")
        )
        
        },  function (error, body, status_code, headers) {
          if (error) {
            console.log(error);
            
          } 
        });
      },
    };
  },
};
