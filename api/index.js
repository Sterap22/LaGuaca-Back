const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorsHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

// const whiteList = ['http://localhost:3000']
// const options = {
//   origin: (origin, callback)=>{
//     if (whiteList.includes(origin) || !origin ) {
//       callback(null, true)
//     }else{
//       callback(new Error('no permission'))
//     }
//   }
// }
app.use(cors()) //cualquier dominio
// app.use(cors(options))

app.get('/api',(req, res)=>{
  res.send('el api esta viva!!')
})

routerApi(app);

//middlewere
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorsHandler);



app.listen(port);

