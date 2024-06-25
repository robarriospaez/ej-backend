import fs from 'fs';

export function countEvenNumbers(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');

        
        const lines = data.split('\n');
        let evenCount = 0;

        
        for (let line of lines) {
            const number = parseInt(line.trim(), 10);
            if (!isNaN(number) && number % 2 === 0) {
                evenCount++;
            }
        }

        return evenCount;
    } catch (err) {
        console.error('Error:', err);
        return 0;
    }
}