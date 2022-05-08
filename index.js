const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const redditData = require('./data.json');

// Static Files
app.use(express.static(path.join(__dirname, '/public')));
app.use('/img', express.static(__dirname + '/public/images'));

// Templating Engine
// use app.set accepts 2 params: key, value
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');

// Parsing Middleware
app.use(express.urlencoded({extended:true}))

//to set the route to homepage
const homeRouter = require('./routes/scripts')
app.use('/', homeRouter)

app.get('/r/:subreddit', (req, res) => {
  const {subreddit} = req.params;
  const data = redditData[subreddit];
  console.log(data);
  res.render('subreddit', {...data});
})

app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() *10) +1;
  res.render('random', {rand:num});
})

app.listen(8080, () => {
  console.log('Listening on port 8080');
})
