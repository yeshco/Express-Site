const express = require('express');
//^ Requiring the Express module ^

const app = express();
const port = 3000;
//^ Setting the main parts of the app ^

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes/main.js');
const projectsRoutes = require('./routes/projects.js');
//^ Setting different routes ^

app.use(mainRoutes);
app.use('/projects', projectsRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
})

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
  console.log(`The file was 'Not Found' Error: ${err.status}`);
});

app.listen(port, () => {
  console.log(`app running on: http://localhost:${port}`)
})
//^ Setting the listening port ^
