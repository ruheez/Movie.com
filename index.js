const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, '/public')));

//app.set accepts 2 params: key, value
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

//to set the route to homepage
app.get('/', (req, res) => {
  res.render('home.ejs');
})

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
