var url = require("url");
var fs = require("fs");


function RenderHTML(path, response) {
  fs.readFile(path, null, function (error, data) {
    if (error) {
      response.writeHead(404);
      response.write("File not Found");
    } else {
      response.write(data);
    }
    response.end();
  });
}

module.exports = {
  handelRequest: function (request, response) {
    response.writeHead(200, { "content-Type": "text/html" });

    var path = url.parse(request.url).pathname;

    switch (path) {
      case "/": 
      case "/index.html":
        RenderHTML("./index.html", response);
        break;

      case "/signup":
      case "/form.html":
        RenderHTML("./form.html", response);
        break;

      case "/about":
      case "/about.html":
        RenderHTML("./about.html", response);
        break;

      case "/location":
      case"/location.html":
        RenderHTML("./location.html", response);
        break;
      default:
        //RenderHTML("./Error.html", response);
        response.writeHead(400);
        response.write("<h1>Oops!!! 404 Page not found.<h1>");
        response.end();
    }
  },
};
