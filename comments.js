// Create web server 
const express = require('express');
// Create a server
const app = express();
// Create a port
const port = 3000;
// Create a path
const path = require('path');
// Create a public path
const publicPath = path.join(__dirname, '../public');
// Set up a static directory to serve
app.use(express.static(publicPath));
// Set up a view engine
app.set('view engine', 'hbs');
// Set up a views path
const viewsPath = path.join(__dirname, '../templates/views');
app.set('views', viewsPath);
// Set up a partials path
const partialsPath = path.join(__dirname, '../templates/partials');
const hbs = require('hbs');
hbs.registerPartials(partialsPath);
// Set up a route for the home page
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    });
});
// Set up a route for the about page
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    });
});
// Set up a route for the help page
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Andrew Mead',
        message: 'This is a help message'
    });
});
// Set up a route for the weather page
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    });
});
// Set up a route for the help page
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Help article not found'
    });
});
// Set up a route for the 404 page
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found'
    });
});
// Start the server
app.listen(port, () => {
    console.log('Server is up on port ' + port);
});