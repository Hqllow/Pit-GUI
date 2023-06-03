var morgan = require('morgan'),
    bodyParser = require('body-parser'),
    liveRouter = require('../routes/live.server.routes.js')
import * as express from "express"
import mitsuba from '../routes/mitsuba.server.routes'
import bms from '../routes/bms.server.routes'
import mppt from '../routes/mppt.server.routes'
const cors = require('cors')

module.exports.init = function() {
  //initialize app
  var app = express();

  // Allow all origins
  app.use(cors({
    origin: '*'
  }))

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware
  app.use(bodyParser.json());

  //routers
  app.use('/api/live', liveRouter);
  // app.use('/api/graph', graphRouter);
  app.use('/api/bms', bms);
  // app.use('/api/gps', gps);
  app.use('/api/mitsuba', mitsuba);
  app.use('/api/mppt', mppt);


  // app.all('/*', function(req, res)
  // {
  //  res.sendFile(path.resolve(__dirname + '/../../client/build/index.html'));
  // });

  return app;
};
