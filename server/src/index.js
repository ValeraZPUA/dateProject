import express from 'express';
import router from './server/router/index';
import cors from 'cors';
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

process.env.NODE_ENV === 'development' && app.get('/images/*', (req, res) => {
    res.sendFile(`/var/www/html/${req.path}`);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
