const express = require('express')
const logger = require('morgan')
const cors = require('cors');


const {errorHandler} = require('./src/helpers/trycatchHelper');

const app = express()
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json()) //middleware for parse req.body() 

// app.use('/fib');
app.use((req, res) => {
  res.status(404).json({ message: 'Error! Wrong direct' })
})
app.use(errorHandler);
module.exports = app