
const express = require('express');
const fetch = require('node-fetch');

let app = express();

app.get('/phonebook', (req, res) => {
  res.sendFile('phonebook.xml', { root: __dirname }, (err) => {
    if (err) console.log(err);
  });
});

app.get('/push', (req, res) => {

  const xml = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<DigiumIPPhoneText beep="yes">' +
      '<Title>title</Title>' +
      '<Text>text text text</Text>' +
    '</DigiumIPPhoneText>';

  let server = '192.168.1.1';
  let phone = '192.168.1.2';

  fetch('http://' + phone +'/xmlService?', {
    method: 'POST', 
    body: xml,
    headers: {
      'Referer': server,
      'Host': phone,
      'Connection': 'Keep-Alive',
      'Content-Type': 'text/xml',
      'Content-Length': t.length,
    }
  })
  .then(result => console.log(result))
  .then(() => res.end());
});

app.listen(3000, () => {
  console.log('app started');
});