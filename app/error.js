//error handler middleware
const notFoundHandler = (_req, _res, next) => {
    const error = new Error('Resource not found');
    error.status = 400;
    next(error);
}

//global error handler
const errorHandler = (error, _req, res, _next) => {
    //returning our created error
    if(error.status){
        return res.status(error.status).json({
            message: error.message
        });
    };
    res.status(500).json({
        message: 'Something went wrong'
    })
};

module.exports = {
    notFoundHandler,
    errorHandler
}