const responseTimeLogger = (req, res, next) => {
    const startHrTime = process.hrtime();

    res.on('finish', () => {
        const elapsedHrTime = process.hrtime(startHrTime);
        const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
        console.log(`${req.method} ${req.url} - ${elapsedTimeInMs.toFixed(3)} ms`);
    });

    next();
};

export default responseTimeLogger;