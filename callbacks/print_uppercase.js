var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};


function printUpperCase(html) {
  var result = "";
  for (var i = 0; i < html.length; i++) {
    if (html.charCodeAt(i) >= 97 && html.charCodeAt(i) <= 122) {
      var code = html.charCodeAt(i) - 32;
      result += String.fromCharCode(code);
    } else {
      result += html.charAt(i);
    }
  }
  console.log(result);
}

getHTML(requestOptions, printUpperCase);

