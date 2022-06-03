const createTestCafe = require('testcafe')
const env = require('dotenv').config();

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();
        return runner
            .src(['./tests'])
            .browsers(['chrome:headless'])
            .run({
                skipJsErrors: true,
                quarantineMode: { successThreshold: 1, attemptLimit: 3 },
                disableMultipleWindows: false,
            });
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });