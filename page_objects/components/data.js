const env = require('dotenv').config();

class Data {
    url = `${process.env.URL}`
    standardUser = `${process.env.STANDARD_USER}`
    lockedOutUser = `${process.env.LOCKED_OUT_USER}`
    problemUser = `${process.env.PROBLEM_USER}`
    password = `${process.env.PASSWORD}`
}
export default Data