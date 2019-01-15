module.exports = exports = async (req, res, next) => {
    try {
        const currentUserRole = req.user.role;
        console.log("CURENT_ROLE>>>>>>" + currentUserRole);
        const currentUserId = req.user.id;
        console.log("CURENT_ID>>>>>>" + currentUserId);
        const targetId = req.params.id;
        console.log("TARGET_ID>>>>>>" + targetId);
        if (req.params.photoName) {
            const idFromPhotoName = req.params.photoName.split('-')[0];
            if (idFromPhotoName !== targetId) {
                next("Access deny");
            }
        }

        if(currentUserId == targetId || currentUserRole == "admin") {
            next();
        } else {
            next("Access deny");
        }
        // if (req.body.isBanned !== undefined) {
        //     console.log(currentUserRole);
        //     if (currentUserRole !== "moderator") {
        //         console.log(currentUserRole !== "moderator");
        //         console.log(currentUserRole !== "admin");
        //         console.log('1', req.body.isBanned);
        //         next("1 Access deny");
        //     }
        // }
        //
        // if (req.body.isBanned !== undefined) {
        //     console.log(currentUserRole);
        //     if (currentUserRole !== "admin") {
        //         console.log(currentUserRole !== "moderator");
        //         console.log(currentUserRole !== "admin");
        //         console.log('2', req.body.isBanned);
        //         next("2 Access deny");
        //     }
        // }
        //
        // if (req.body.isActive !== undefined) {
        //     if (currentUserRole !== "admin") {
        //         console.log(currentUserRole !== "moderator");
        //         console.log(currentUserRole !== "admin");
        //         console.log('2', req.body.isActive);
        //         next("3 Access deny");
        //     }else {
        //         next();
        //     }
        // }
        //
        // if(currentUserId == targetId || (currentUserRole == "admin" || currentUserRole == "moderator")) {
        //     console.log('1.5');
        //     next();
        // } else {
        //     next("3 Access deny");
        // }

    } catch (e) {
        next("4 Access deny");
    }
};


// //import { User } from '../models';
//
// module.exports = exports = async (req, res, next) => {
//     try {
//         const currentUserRole = req.user.role;
//         console.log("CURENT_ROLE>>>>>>" + currentUserRole);
//         const currentUserId = req.user.id;
//         console.log("CURENT_ID>>>>>>" + currentUserId);
//         const targetId = req.params.id;
//         console.log("TARGET_ID>>>>>>" + targetId);
//         if (req.params.photoName) {
//             const idFromPhotoName = req.params.photoName.split('-')[0];
//             console.log("TARGET_idFromPhotoName>>>>>>" + idFromPhotoName);
//             if (idFromPhotoName !== targetId) {
//                 next("Access deny");
//             }
//         }
//         if(currentUserId == targetId || currentUserRole == "admin") {
//             next();
//         } else {
//             next("Access deny");
//         }
//     } catch (e) {
//         next(e);
//     }
// };
