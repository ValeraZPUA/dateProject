import {User} from '../models/index.js'


module.exports = exports = async (req, res, next) => {
    try {
        const currentUserRole = req.user.role;
        console.log("CURENT_ROLE>>>>>>" + currentUserRole);
        const currentUserId = req.user.id;
        console.log("CURENT_ID>>>>>>" + currentUserId);
        const targetId = req.params.id;
        console.log("TARGET_ID>>>>>>" + targetId);
        const targetUser = await User.find({where: {id: req.body.id}});
        let targetRole = '';
        if (targetUser) {
            targetRole = targetUser.role;
            console.log("TARGET_ROLE>>>>>>" + targetRole);
        }
        if (req.params.photoName) {
            const idFromPhotoName = req.params.photoName.split('-')[0];
            if (idFromPhotoName !== targetId) {
                return next("Access deny");
            }
        }

        if ((currentUserId == targetId && req.body.role == undefined && req.body.isBanned == undefined && req.body.isActive == undefined) ||
            (currentUserId == targetId && currentUserRole == "moderator" && req.body.role == undefined && req.body.isBanned == undefined && req.body.isActive == undefined) ||
            (targetId == undefined && currentUserRole == "moderator" && req.body.isBanned !== undefined && targetRole !== "moderator" && targetRole !== "admin") ||
            (currentUserRole == "admin" && targetRole !== "admin")) {
            console.log(currentUserId == targetId && req.body.role == undefined && req.body.isBanned == undefined && req.body.isActive == undefined);
            console.log((currentUserId == targetId && currentUserRole == "moderator" && req.body.role == undefined && req.body.isBanned == undefined && req.body.isActive == undefined));
            console.log(targetId == undefined && currentUserRole == "moderator" && req.body.isBanned !== undefined && targetRole !== "moderator" && targetRole !== "admin");
            console.log(currentUserRole == "admin" && targetRole !== "admin");
            next();
        } else {
            console.log(currentUserId == targetId && req.body.role == undefined && req.body.isBanned == undefined && req.body.isActive == undefined);
            console.log((currentUserId == targetId && currentUserRole == "moderator" && req.body.role == undefined && req.body.isBanned == undefined && req.body.isActive == undefined));
            console.log(targetId == undefined && currentUserRole == "moderator" && req.body.isBanned !== undefined && targetRole !== "moderator" && targetRole !== "admin");
            console.log(currentUserRole == "admin" && targetRole !== "admin");
            return next("Access deny");
        }

    } catch (e) {
        next(e);
    }
};
