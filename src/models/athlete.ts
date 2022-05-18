import {Document, model, Schema} from 'mongoose';
import validator from 'validator';

/**
 * @interface AthleteDocumentInterface Document interfaz para atletas.
 * @extends Document
 */
export interface AthleteDocumentInterface extends Document {
    name: string,
    surname: string[],
    age: number,
    sport: string,
    test: string,
    personalBest: number,
    dni: string,
};

/**
 * @const AthleteSchema Esquema de atleta Mongoose.
 */
export const AthleteSchema = new Schema<AthleteDocumentInterface>({
  name: {
    type: String,
    required: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('El nombre debe comenzar con una letra mayúscula');
      } else if (!validator.isAlpha(value)) {
        throw new Error('El nombre debe contener solo caracteres alfabéticos');
      }
    },
  },
  surname: {
    type: [String],
    required: true,
    validate: (value: string[]) => {
      if (value.length === 0) {
        throw new Error('Los deportistas deben tener al menos un apellido.');
      }
      value.forEach((element: string) => {
        if (!validator.isAlpha( element, 'es-ES', {'ignore': ' -'})) {
          throw new Error('Los apellidos deben contener solo caracteres alfabéticos');
        } else if (!element.match(/^[A-Z]/)) {
          throw new Error('El apellido debe comenzar con una letra mayúscula');
        }
      });
    },
  },
  age: {
    type: Number,
    required: true,
  },
  sport: {
    type: String,
    required: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('El deporte debe empezar con mayúscula');
      } else if (!validator.isAlpha(value)) {
        throw new Error('El deporte debe contener solo caracteres alfabéticos');
      }
    },
  },
  test: {
    type: String,
    required: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('La prueba debe comenzar con una letra mayúscula');
      }
    },
  },
  personalBest: {
    type: Number,
    required: true,
  },
  dni: {
    type: String,
    unique: true,
    required: true,
    validate: (value: string) => {
      if (value.length !== 9) {
        throw new Error('DNI debe tener 9 cifras');
      }
    },
  },
});

/**
 * @const User Mongoose model
 */
export const Athlete = model<AthleteDocumentInterface>('Athlete', AthleteSchema);