const dotenv = require('dotenv');
dotenv.config({path: './Config/config.env'})

const express = require('express');
const app = express();
const cors = require('cors');
const database = require('./DataBase/UserRegisterDatabase')
const registerRouter = require('./Routes/Register')
const loginRouter = require('./Routes/Login')

app.use(express.json())
app.use(cors());

app.use('/api/register', registerRouter)
app.use('/api/login', loginRouter)

app.get("/", (req, res) => {
    res.send('<h1>Tejas</h1>')
});

database().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Jay Shree Ram");
    });
});