'use strict';
const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json({ strict: false }));

app.get('/test', function (req, res) {
  const valuesInside = [], valuesOutside = [];
  for(let i=0; i< 10; i++) {
    valuesInside.push({timestamp: Date.now() - (i* 10000), value: (19 + (Math.random() * 2)) })
    valuesOutside.push({timestamp: Date.now() - (i* 10000), value: (-1 + (Math.random() * 4)) })
  }

  const data = [
    { label: 'inne', valuesInside },
    { label: 'ute', valuesOutside }
  ]
  res.send(data)
})

module.exports.handler = serverless(app);