const express = require('express');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const image = require('./controllers/image');



const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'test',
      database : 'smart-brain'
    }
  });


const app = express();
app.use(cors())
app.use(express.json());





app.get('/', (req, res) => {
    res.send('Success!');
})




//Sign in page server and database
app.post('/signin', signin.handleSignIn);



//Register page server and database
app.post('/register', register.handleRegister);



//Updating image entries count and saving in database
app.put('/image', image.handleImage);




app.listen(3000, () => {
    console.log('App is running on port 3000');
})

