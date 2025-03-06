//create a web server
var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response){
    //parse the request url
    var urlParts = url.parse(request.url);
    //check if the request is for the comments page
    if(urlParts.pathname == '/comments'){
        //read the comments from the file
        fs.readFile('comments.txt', 'utf8', function(err, data){
            //send the comments back to the client
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            response.end(data);
        });
    } else {
        //send a 404 error for any other request
        response.writeHead(404);
        response.end();
    }
});

server.listen(3000, function(){
    console.log('Server running on port 3000');
});