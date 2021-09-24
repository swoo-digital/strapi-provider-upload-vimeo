ACCESS_TOKEN = "66bd8a88ced9975386479c93770815b4"
CLIENT_SECRET = "gxF+K4Rt7KiVOX28pOs7LOFNmvPag2CjrtPc+CsdxfD3OPUWaTVFpxcgfbtSEigM2BJgRYz2qk3BiZxTZBO9zCb3FD5MGkfLcBxuzhiQsl1MDpk5mHGD00SRcX8zoD/y"
CLIENT_ID = "7846cc7d487f775951586054a9aaf2faeadf9c27"

var Vimeo = require('vimeo').Vimeo;
var client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);

// redirect_uri = "http://localhost:80"
// scopes = ["private", "purchased", "create", "edit" ,"delete" ,"interact" ,"upload", "promo_codes", "video_files" ,"scim", "public"]
// state = "authenticated"
// var url = client.buildAuthorizationEndpoint(redirect_uri, scopes, state)

let file_name = "./file_example_MP4_480_1_5MG.mp4"
client.upload(
  file_name,
  {
    'name': 'New Upload',
    'description': 'The description goes here.'
  },
  function (uri) {
    console.log('Your video URI is: ' + uri);
  },
  function (bytes_uploaded, bytes_total) {
    var percentage = (bytes_uploaded / bytes_total * 100).toFixed(2)
    console.log(bytes_uploaded, bytes_total, percentage + '%')
  },
  function (error) {
    console.log('Failed because: ' + error)
  }
)
client.request(/*options*/{
    method: 'DELETE',
    path: '/videos/613581310'
  }, /*callback*/function (error, body, status_code, headers) {
    if (error) {
      console.log('error');
      console.log(error);
    } else {
      console.log('body');
      console.log(body);
    }
   
    console.log('status code');
    console.log(status_code);
    console.log('headers');
    console.log(headers);
  });