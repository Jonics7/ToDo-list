import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';

const app = express();
const PORT = process.env.PORT || 9090;

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

// app.post('/post', function (reqest, response) {
//     client.connect((err: any) => {
//         if (err) {
//             console.log(err);
//         } else {
//             response.send({ data: 'fuck' });
//         }
//         client.close();
//     });
// });

const uri = 'mongodb+srv://Jonics7:3145324pP@todo-list.g8ewk.mongodb.net/todos';

async function Start() {
    try {
        await connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(PORT, () => {
            console.log('Server has been started on port ' + PORT);
        });
    } catch (err) {
        console.log(err);
    }
}

Start();
