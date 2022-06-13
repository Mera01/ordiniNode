// jwt
const jwt = require("jsonwebtoken")

// secret key
const jwtSecret = 'jac_questalanostrachiavesegreta_'

// verify jwt token (express middleware)
this.verifyToken = function(request, response, next) {
    let jwtToken = request.headers['authorization']
    console.log('verifyToken(url: ' + request.originalUrl + ', jwtToken: ' + jwtToken + ')')

    if (jwtToken && jwtToken !== 'undefined') {
        if (jwtToken.startsWith('Bearer ')) {
            jwtToken = jwtToken.slice(7, jwtToken.length)
        }

        jwt.verify(jwtToken, jwtSecret, (error, jwtData) => {
            if (error) {
                return response.status(401).json({
                    success: false,
                    message: 'Invalid token'
                })
            } else {
                request.jwtData = jwtData
                next()
            }
        })
    } else {
        return response.status(403).json({
            success: false,
            message: "The auth token is not supplied"
        })
    }
};
