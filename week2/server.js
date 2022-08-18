// server.js

const express = require('express');
const app = express();

const PORT = 3000;

// Movies List
let movies = [
    { name: 'Top Gun', year: '1986'},
    { name: 'Boondock Saints', year: '1999'},
    { name: 'Black Hawk Down', year: '2001'},
    { name: 'Rush Hour', year: '1998'},
    { name: 'City of Angels', year: '1998'},
];

app.get('/movies', (req, res) => {
    res.send(movies)
});

// Actors List
let actors = [
    { actor: 'Tom Cruise'},
    { actor: 'Norman Reedus'},
    { actor: 'Josh Hartnett'},
    { actor: 'Chris Tucker'},
    { actor: 'Nicolas Cage'},
];

app.get('/actors', (req, res) => {
    res.send(actors)
});

// Genre List
let genre = [
    { genre: 'Action/Drama'},
    { genre: 'Action'},
    { genre: 'Action/Military/Drama'},
    { genre: 'Action/Comedy'},
    { genre: 'Drama'},
];

app.get('/genres', (req, res) => {
    res.send(genre)
});

// server start logic
app.listen('3000', () => {
    console.log('App started on port: ${3000}')
})