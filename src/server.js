import express from 'express'
import routes from './routes'

// const express = require('express');
// const routes = require('./routes');

const app = express();

app.use(express.json())
app.use(routes);