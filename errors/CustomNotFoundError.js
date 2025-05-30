class CustomNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCose = 404;
        // So the error is neat when stringified. NotFoundError: message instead of Error: message
        this.name = "NotFoundError";
    }
}

module.exports = CustomNotFoundError;