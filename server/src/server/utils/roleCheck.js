import {User} from '../models';

module.exports = exports = async (req, res, next) => {
    try {
        const currentUserRole = req.user.role;
        console.log("CURENT_ROLE>>>>>>" + currentUserRole);
        const currentUserId = req.user.id;
        console.log("CURENT_ID>>>>>>" + currentUserId);
        const targetId = req.params.id;
        console.log("TARGET_ID>>>>>>" + targetId);
        if(currentUserId == targetId || currentUserRole == "admin") {
            next();
        } else {
            next("Access deny");
        }
    } catch (e) {
        next(e);
    }
};
