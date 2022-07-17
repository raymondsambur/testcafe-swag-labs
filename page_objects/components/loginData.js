class LoginData {
    testcases = [
        {
            testTitle: "Verify error message for no username inputed",
            errorMessage: "Epic sadface: Username is required",
            value: "No Username"
        },
        {
            testTitle: "Verify error message for no password inputed",
            errorMessage: "Epic sadface: Password is required",
            value: "No Password"
        },
        {
            testTitle: "Verify error message for invalid username or password",
            errorMessage: "Epic sadface: Username and password do not match any user in this service",
            value: "Invalid Username or Password"
        },
        {
            testTitle: "Verify error message for locked user",
            errorMessage: "Epic sadface: Sorry, this user has been locked out.",
            value: "Locked User"
        },
    ]
}
export default LoginData