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
              for(i=0;i<res.data.files.length;i++){
                if(res.data.files[i].public_name = "SD 360p"){
                  file.url = res.data.files[i].link.split("&profile_id=164")[0]+"download=1"
                }
              }
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
            str.lastIndexOf("/") + 1, 
            str.indexOf(".sd")
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
