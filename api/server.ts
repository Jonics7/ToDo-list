import * as express from 'express';
// import * as path from 'path';

const app = express();
const port = 9000;

app.get('/', function (request, response) {
    response.send('Api is working');
});

app.listen(port, () => {
    console.log('Server has been started on port ' + port);
});
