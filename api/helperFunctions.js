function dbError(res) {
    return res.status(500).json({ message: "There was an error with the database" });
}

module.exports = {
    dbError
}