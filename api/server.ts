import express from 'express';
import cors from 'cors';
// import * as path from 'path';

const app = express();
const port = 9090;

app.use(
    cors({
        origin: 'http://localhost:3000',
    }),
);

const data = {
    id: 'hello',
};

app.get('/', function (request, response) {
    response.send(data);
});

app.listen(port, () => {
    console.log('Server has been started on port ' + port);
});
