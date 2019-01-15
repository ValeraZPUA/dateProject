module.exports = exports = async (req, res, next) => {
    const currentUserRole = req.user.role;
    if (req.body.isBanned !== undefined && (currentUserRole == "moderator" || currentUserRole == "admin")) {
        console.log('1', req.body.isBanned);
        next();
    }

    if (req.body.isActive !== undefined && currentUserRole == "admin") {
        console.log('2', req.body.isActive);
        next();
    }

}
