require('./src/Connection/Connection')
const express = require('express');
const App = express();
var cors = require('cors');
const noteRouter= require('./src/Routes/noteRouter');
const userRouter = require('./src/Routes/userRouter')

//Middleware;
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cors({
    origin: 'http://localhost:3000'
  }));

//Routes;
App.use('/users',userRouter)
App.use('/api/notes',noteRouter)

//Conform;
App.get('/',(req,res)=>{
  res.send(`<h1>Don't Give up</h1>`)
})


//Port Listing;
const PORT = 7000;
App.listen(process.env.PORT || PORT, () => {
    console.log('Port is Running on ' + PORT);
});