const express = require('express');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const routerApi = require('./routes');
const swaggerDocument  = require('../swagger/Doc.json')
// const { checkApiKey } = require('./middlewares/auth.handler')

const { logErrors, errorsHandler, boomErrorHandler } = require('./middlewares/error.handler');


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const whiteList = ['http://localhost:5173','http://localhost:3000']
const options = {
  origin: (origin, callback)=>{
    if (whiteList.includes(origin) || !origin ) {
      callback(null, true)
    }else{
      callback(new Error('no permission'))
    }
  }
}

app.use(cors(options));
require('./utils/auth');

// app.get('/api',checkApiKey,(req, res)=>{
//   res.send('el api esta viva!!')
// })

routerApi(app);

//middlewere
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorsHandler);


app.listen(port);

