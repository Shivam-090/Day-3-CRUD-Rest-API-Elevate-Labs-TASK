import express from 'express';
import BookRoutes from './routes/bookRoutes.js';

const app = express();
const PORT = 3000;

//MIddleware
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Welcome to the Book API. Use /api/books to interact');
})


//Routes
app.use('/api/books', BookRoutes);

//Start the server
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});