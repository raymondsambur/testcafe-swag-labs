const createTestCafe = require('testcafe')
const env = require('dotenv').config();

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();
        return runner
            .src(['./tests'])
            .browsers(['chrome:headless'])
            .concurrency(2)
            .filter((testName, fixtureName, fixturePath, testMeta, fixtureMeta) => {
                return testMeta.heavyFlow == true //true or false
                    && testMeta.testCaseType == 'positive' //positive or negative
                    && testMeta.regression == true //true or false
                    && testMeta.isDeprecated == false //true or false
            })
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