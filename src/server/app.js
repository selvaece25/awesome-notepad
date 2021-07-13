const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const appConfig = require('../../config/app.json');

const routes = require('./routes/notepad');

const app = express();

mongoose.connect(appConfig.mongo_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  poolSize: appConfig.pool_size,
});

app.use(cors());

app.use(bodyParser.json({ type: 'application/json' }));
app.use('/api/note', routes);
// Serve front end a
app.listen(appConfig.port, () =>
  // eslint-disable-next-line no-console
  console.log(
    `App listening on port ${appConfig.port}.\n\nLoad it in your browser at http://localhost:${appConfig.port}`
  )
);
