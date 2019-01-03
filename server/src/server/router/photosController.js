import multer from 'multer';


module.exports.uploadPhoto = async (req, res, next) => {
    const storage = multer.diskStorage({
        destination: './public/img/',
        filename: function ( req, file, cb ) {
            console.log(file);
            cb( null, file.originalname);
        }
    });
    const upload = multer({
        storage: storage
    }).any();

    upload(req, res, function(err) {
        if (err) {
            return next(err);
        } else {
            //save filename into DB
            res.send('hello');
        }
    });
}
