const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser')

const register = require ('./controllers/register');
const signin = require ('./controllers/signin');
const profile = require ('./controllers/profile');
const image = require ('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '7867',
    database : 'smartbrain'
  }
});



app.use(express.json());
app.use(cors())
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('success');
})

app.post('/signin', (req,res)=>{signin.handleSignin(req,res,db,bcrypt) })

app.post('/register', (req,res)=>{register.handleRegister(req,res,db,bcrypt) })

app.get('/profile/:id',  (req,res)=>{profile.handleProfileGet(req,res,db) })

app.put('/image', (req,res)=>{image.handleImagePut(req,res,db) })
app.post('/imageurl', (req,res)=>{image.handleApiCall(req,res) })


app.listen(3000, () => {
    console.log('app is running on poprt 3000');
})



// response 
// sign in --> post == sucess/fail
// register --> Post = user object
// profile/:userId --.=> GET == userinfo