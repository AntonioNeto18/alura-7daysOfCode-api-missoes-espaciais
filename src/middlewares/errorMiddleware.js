function error (error, req, res, next) {
    if (error.name === "CastError") return res.status(400).json({ message: "Bad Request", status: 400 });
    else if (error.name === "ValidationError") {
        const messageError = Object.keys(error.errors).map((error) => `${error} is required`);
        return res.status(400).json({ message: messageError, status: 400 });
    } 
    else if (error === 404) return res.status(404).json({ message: "Mission not found", status: 404 });
    else next(error);
};

// eslint-disable-next-line no-unused-vars
function genericError (error, req, res, next) {
    res.status(500).json({ message: "Internal Error", status: 500, error: error });
};

export { error, genericError };