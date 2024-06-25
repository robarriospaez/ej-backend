import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logFilePath = path.join(__dirname, 'request.txt');

// Verificar y crear el archivo si no existe
if (!fs.existsSync(logFilePath)) {
    fs.writeFileSync(logFilePath, '', (err) => {
        if (err) {
            console.error('Error creating log file:', err);
        }
    });
}

const requestLogger = (req, res, next) => {
    const startTime = new Date();

    res.on('finish', () => {
        const logEntry = `${startTime.toISOString()} - ${req.method} ${req.url} - ${res.statusCode}\n`;
        fs.appendFile(logFilePath, logEntry, (err) => {
            if (err) {
                console.error('Error writing to log file:', err);
            }
        });
    });

    next();
};

export default requestLogger;