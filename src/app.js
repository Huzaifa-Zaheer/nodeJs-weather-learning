const path = require('path')
const express = require('express')
const hbs = require('hbs')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const app = express()

app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(path.join(__dirname, '../public')))
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather App",
        name: "Muhammad Huzaifa"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: "Muhammad Huzaifa"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help Me",
        message: "If you're having trouble accessing the product, there's a chance we're currently experiencing a temporary problem.",
        name: "Muhammad Huzaifa"
    })
})

app.get('/weather', (req, res) => {
    res.send([{
        Location: -71
    }, {
        Temperature: 29
    }])
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        name: "Muhammad Huziafa",
        title: "404",
        errorMessage: "Help article not found."
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        name: "Muhammad Huziafa",
        title: "404",
        errorMessage: "Page not found."
    })
})

app.listen('3000', () => {
    console.log('Server is up running.')
})