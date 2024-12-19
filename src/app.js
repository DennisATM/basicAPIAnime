import express from 'express';
import animeRouter from './routes/anime.route.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use('/api/v1',animeRouter);

app.listen(PORT, ()=>{
    console.log(`Server online in Port: http://localhost:${PORT} 🍢`);
});

export default app;