import {User} from './models/user'
import './db/mongoose';
import { exit } from 'process';

const user = new User({
  nombre: 'SergioO',
  apellido: 'MelladoO',
  edad: 22,
  contraseña: 'NUEVO-PASS'
});

    const allowedUpdates = ['nombre', 'apellido', 'edad', 'contraseña'];
    const actualUpdates = Object.keys(user);
    const isValidUpdate =
      actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    console.log('No está permitido actualizar');
    exit(0);
  } else {
    User.findOneAndUpdate({"email": "sergiomellado@gmail.com"}, user, {
        new: true,
        runValidators: true,
      }).then((user) => {
        if (!user) {
            console.log("Usuario no encontrado");
            exit(0);
        } else {
            console.log(user);
            exit(0);
        }
      }).catch((error) => {
        console.log(error);
        exit(0);
    });
  }