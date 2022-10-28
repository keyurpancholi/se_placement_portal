module.exports = (req, res, next) => {
    const header = req.get('Admin')
    // if admin header doesnt exist then throw authentication error
    if (!header){
        const error = new Error("Unauthenticated admin")
        error.statusCode = 401
        throw error
    }
    
    next()
}