# strapi-provider-upload-vimeo

Strapi provider for uploading your videos on vimeo. You can use [strapi-provider-upload-multiple-provider](https://www.npmjs.com/package/strapi-provider-upload-multiple-provider) npm module for uploading images on different module.


---
Configure in ```.\config\plugins.js```
```js
    {
        provider: "vimeo",
        providerOptions:{
            // you should obviously use process.env.YOUR_VARS for security reasons
            accessToken : "ACCESS_TOKEN", //upload and delete permissions
            clientSecret : "CLIENT_SECRET",
            clientId : "CLIENT_ID",
            premium : true // or false

            // If you want to upload to a specific folder, create that folder first and then
            // uncomment the following line and replace the folderId with the id of the folder.
            // Example: "https://vimeo.com/manage/folders/12345678" -> "12345678"
            // folderId: "12345678"
        }
    }
```

Supported version Strapi 3.6
