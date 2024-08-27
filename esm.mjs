import numeroPrimo from './index.js';

const number = 7; 
console.log(`¿Es ${number} un número primo? ${numeroPrimo(number)}`);

//esto es para traer lo del dato del .env.

import dotenv from 'dotenv';
dotenv.config();

const number2 = process.env.numeroVerificar;
console.log(`¿Es ${number2} un número primo? ${numeroPrimo(Number(number2))}`);