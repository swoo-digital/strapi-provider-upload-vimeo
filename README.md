# strapi-provider-upload-vimeo

Strapi provider for uploading your videos on vimeo. You can use [strapi-provider-upload-multiple-provider](https://www.npmjs.com/package/strapi-provider-upload-multiple-provider) npm module for uploading images on different module.


---
Configure in ```.\config\plugins.js```
```js
    {
        provider: "vimeo",
        providerOptions:{
            accessToken : "ACCESS_TOKEN", //upload and delete permissions
            clientSecret : "CLIENT_SECRET",
            clientId : "CLIENT_ID"
        }
    }
```

