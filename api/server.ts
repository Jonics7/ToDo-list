import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import mainRoutes from './routes';
import userRoutes from './Users/routes/userRoutes';
import dotenv from 'dotenv';
const routes = [mainRoutes, userRoutes];

const app = express();
const PORT = process.env.PORT || 9080;
dotenv.config({ path: './.env' });

app.use(
    cors({
        origin: 'http://localhost:3000',
    }),
);
app.use(routes);
app.use(express.json({ type: '*/*' }));

async function Start() {
    try {
        if (process.env.MONGODB_URI === undefined) {
            console.log('uri is undefined');
        } else {
            await connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            app.listen(PORT, () => {
                console.log('Server has been started on port ' + PORT);
            });
        }
    } catch (err) {
        console.log(err);
    }
}

Start();
