import express from 'express';
import searchRoutes from './routes/search.route';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: process.env.CLIENT_URL, // Adjust this to your frontend's origin
  })
);
app.use(express.json());

app.use("/api/search", searchRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
