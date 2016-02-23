import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import { routes } from './routes'

var webpack = require('webpack')
//var webpackDevMiddleware = require('webpack-dev-middleware')
//var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var express = require('express')

var app = new express()
var port = 8080

var compiler = webpack(config)
//app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
//app.use(webpackHotMiddleware(compiler))

/*
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
*/
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('*', function(req, res) {
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (props) {
      const markup = renderToString(<RoutingContext {...props} />)

      res.render('index', { markup })

    } else {
      res.sendStatus(404)
    }
  })
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
