function error (error, req, res, next) {
    if (error.name === "CastError") return res.status(400).json({ message: "Bad Request"});
    else if (error.name === "ValidationError") {
        const messageError = Object.values(error.errors).map((error) => error.message);
        return res.status(400).json({ message: messageError});
    } 
    else if (error === 404) return res.status(404).json({ message: "Mission not found"});
    else next(error);
};

// eslint-disable-next-line no-unused-vars
function genericError (error, req, res, next) {
    res.status(500).json({ message: "Internal Error", status: 500, error: error });
};

export { error, genericError };