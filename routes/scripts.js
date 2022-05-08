const express = require('express')
const homeRouter = express.Router()
const axios = require('axios')

homeRouter.get('', async (req, res) => {
  try {
    const apiUrl = await axios.get
        ("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1");
    const shows = apiUrl.data
    const showsData = shows.results
    res.render('home', {movies: showsData})
  } catch(error) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log('Error', error.message)
    }

  }
})

module.exports = homeRouter
//
// const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCHAPI =
//     "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
//
// const menuBtn = document.querySelector("#menuBtn");
// const submenu = document.querySelector("#submenu");
//
// menuBtn.addEventListener('click', function() {
//   submenu.classList.remove = "hidden";
// });
