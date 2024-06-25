import { countEvenNumbers } from './utils.js';
import fs from 'fs';

const inputFilePath = 'numbers.txt';
const outputFilePath = 'result.txt';

const evenCount = countEvenNumbers(inputFilePath);

const outputContent = `Cantidad de números pares: ${evenCount}`;

try {
    fs.writeFileSync(outputFilePath, outputContent);
    console.log('La respuesta está en el archivo "Resul" ', outputFilePath);
} catch (err) {
    console.error('Error al escribir el archivo:', err);
}