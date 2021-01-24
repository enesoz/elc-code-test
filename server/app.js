/**
 * The Server Can be configured and created here...
 *
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const service = require('./services/ProductService');
const serviceInstance = new service();
const http = require('http');
const hostname = 'localhost';
const port = 3035;
const url = require('url');

/**
 * Start the Node Server Here...
 *
 * The http.createServer() method creates a new server that listens at the specified port.
 * The requestListener function (function (req, res)) is executed each time the server gets a request.
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */
http.createServer(function (req, res) {
    // .. Here you can create your data response in a JSON format
    if (req.method === 'GET') {
        const {pathname} = url.parse(req.url);
        if (pathname === '/query') {
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            let query = req.query;
            console.log("Client search keyword :{}",query);
            res.end(JSON.stringify(serviceInstance.getAutoCompleteResult(query)));
            return;
        }
    }
    res.statusCode = 404
    res.end("{error:HTTP.404}");

}).listen(port);


console.log(`[Server running on ${hostname}:${port}]`);
