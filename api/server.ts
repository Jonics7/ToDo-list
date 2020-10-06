import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import mainRoutes from './routes';
import userRoutes from './Users/routes/userRoutes';

const routes = [mainRoutes, userRoutes];

const app = express();
const PORT = process.env.PORT || 9080;
const uri = 'mongodb+srv://Jonics7:3145324pP@todo-list.g8ewk.mongodb.net/todos';

app.use(
    cors({
        origin: 'http://localhost:3000',
    }),
);
app.use(routes);

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
