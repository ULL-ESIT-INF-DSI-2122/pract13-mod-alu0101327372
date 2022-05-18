import {Athlete} from '../models/athlete';

/**
 * @class Operaciones CRUD de base de datos de atletas.
 */
export class AthleteCRUD {
  /**
   * Agrega una deportista a la base de datos.
   * @param athlete Deportista
   */
  public static postUser(athlete: { save: () => Promise<any>; }) {
    athlete.save().then((result) => {
      console.log(result);
    }).catch((error: any) => {
      console.log(error);
    });
  }

  /**
   * Obtiene un atleta de la base de datos.
   * @param dni DNI del deportista a conseguir
   */
  public static getUser(dni: string) {
    const filter = {dni: dni};
    Athlete.find(filter).then((athlete) => {
      if (athlete.length !== 0) {
        console.log(athlete);
      } else {
        console.log('Athlete not found');
      }
    }).catch((error: any) => {
      console.log(error);
    });
  }

  /**
   * Actualiza una base de datos atleta.
   * @param dni DNI del deportista para actualizar
   * @param update Datos a actualizar
   */
  public static patchUser(dni: string, update) {
    const filter = {dni: dni};
    Athlete.findOneAndUpdate(filter, update, {
      new: true,
      runValidators: true,
    }).then((athlete) => {
      if (!athlete) {
        console.log('Athlete not found');
      } else {
        console.log(athlete);
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  /**
   * Elimina un atleta de la base de datos.
   * @param dni DNI del deportista a borrar
   */
  public static deleteUser(dni: string) {
    const filter = {dni: dni};
    Athlete.findOneAndDelete(filter).then((athlete: any) => {
      if (!athlete) {
        console.log('Athlete not found');
      } else {
        console.log(athlete);
      }
    }).catch((error: Error) => {
      console.log(error);
    });
  }
}
