const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (file.fieldname === "avatar") {
      return cb(null, "uploads/avatar");
    }
    cb(null, "uploads/image");
  },
  filename(req, file, cd) {
    cd(null, Date.now() + "-" + file.originalname);
  },
});

const types = ["image/png", "image/jpeg", "image/jpg", "image/heic"];
const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
module.exports = multer({ storage, fileFilter });
