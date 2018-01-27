const express = require('express')

const app = express();

app.get('/', (req, res) => {
  res.send({
    store: {
      simona: 'hello',
      toshiki: 'world'
    }});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);