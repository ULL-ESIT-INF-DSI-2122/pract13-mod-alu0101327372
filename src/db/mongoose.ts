import {connect} from 'mongoose';

connect('mongodb://127.0.0.1:27017/dsi-assessment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Conexión al servidor MongoDB establecida');
}).catch(() => {
  console.log('No se puede conectar al servidor MongoDB');
});