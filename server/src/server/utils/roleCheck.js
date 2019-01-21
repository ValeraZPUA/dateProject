import {User} from '../models/index.js'


module.exports = exports = async (req, res, next) => {
    try {
        const currentUserRole = req.user.role;
        const currentUserId = req.user.id;
        const targetId = req.params.id;
        const targetUser = await User.find({where: {id: req.body.id}});
        let targetRole = '';
        if (targetUser) {
            targetRole = targetUser.role;
        }
        if (req.params.photoName) {
            const idFromPhotoName = req.params.photoName.split('-')[0];
            if (idFromPhotoName !== targetId && currentUserRole !== "admin") {
                return next("Access deny");
            }
        }

        if ((currentUserId == targetId && req.body.role == undefined && req.body.isBanned == undefined && req.body.isActive == undefined) ||
            (currentUserId == targetId && currentUserRole == "moderator" && req.body.role == undefined && req.body.isBanned == undefined && req.body.isActive == undefined) ||
            (targetId == undefined && currentUserRole == "moderator" && req.body.isBanned !== undefined && targetRole !== "moderator" && targetRole !== "admin") ||
            (currentUserRole == "admin" && targetRole !== "admin")) {
            next();
        } else {
            return next("Access deny");
        }

    } catch (e) {
        next(e);
    }
};
