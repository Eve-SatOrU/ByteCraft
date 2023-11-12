const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.text());
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static('public'));

// routes
const routes = require('./routes/routes');
app.use('/', routes);
// controllers
const controller = require('./controllers/controller');

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});