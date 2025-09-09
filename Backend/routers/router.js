// const express = require("express");
// const router = express.Router();
// const cApi = require("../controlers/controler");

// // Public route: submit form
// router.post("/createContact", cApi.createContact);

// // Admin routes
// router.get("/getAllContacts", cApi.getAllContacts ); // Get all messages
// router.delete("/:id/deleteContact", cApi.deleteContact);

// router.post("/apply", upload.array("documents", 5), cApi.createApplication);

// // GET - all applications
// router.get("/getapplications", cApi.getAllApplications);

// // GET - single application by ID
// router.get("/getapplications/:id", cApi.getApplicationById);

// // DELETE - delete application
// router.delete("/deleteapplications/:id", cApi.deleteApplication);




// module.exports = router;



const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const cApi = require("../controlers/controler");

// ===== Multer Setup =====
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // folder where files will be saved
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        path.extname(file.originalname) // keep original extension
    );
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max per file
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf/;
    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpeg, .jpg, .png, .pdf files are allowed"));
    }
  },
});

router.post("/register", cApi.register);
router.post("/verify-otp", cApi.verifyOtp);
router.post("/login", cApi.login);
router.get("/users", cApi.getAllUsers); // Get all users
router.delete("/users/:id", cApi.deleteuser); // Delete user by ID

// ===== Contact Routes =====
router.post("/createContact", cApi.createContact);
// router.get("/getAllContacts", cApi.getAllContacts); 
// router.delete("/:id/deleteContact", cApi.deleteContact);
// router.post("/replyContact", cApi.replyContact);
router.get("/getAllContacts", cApi.getAllContacts);
router.delete("/:id/deleteContact", cApi.deleteContact);
router.post("/replyContact", cApi.replyContact);


// ===== Visa Application Routes =====
router.post("/apply", upload.array("documents", 5), cApi.createApplication);
router.get("/getapplications", cApi.getAllApplications);
router.get("/getapplications/:id", cApi.getApplicationById);
router.delete("/deleteapplications/:id", cApi.deleteApplication);


router.post("/plans", cApi.createPlan);
router.get("/plans", cApi.getAllPlans);
router.get("/plans/:id", cApi.getPlanById);
router.put("/plans/:id", cApi.updatePlan);
router.delete("/plans/:id", cApi.deletePlan);

// BLOG ROUTES
// router.post("/blogs", cApi.createBlog);
// router.get("/blogs", cApi.getBlogs);         // ✅ FIXED
// router.get("/blogs/:slug", cApi.getBlogBySlug);
// router.put("/blogs/:id", cApi.updateBlog);
// router.delete("/blogs/:id", cApi.deleteBlog);
// router.post("/blogs/:id/like", cApi.likeBlog);
// router.post("/blogs/:id/comment", cApi.addComment);

// BLOG ROUTES WITH FILE SUPPORT
// "image" → single main image
// "gallery" → multiple gallery images

router.post("/blogs", upload.fields([
  { name: "image", maxCount: 1 },
  { name: "gallery", maxCount: 10 }
]), cApi.createBlog);

router.put(
  "/blogs/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "gallery", maxCount: 10 },
  ]),
  cApi.updateBlog
);

// Other blog routes remain the same
router.get("/blogs", cApi.getBlogs);
router.get("/blogs/:slug", cApi.getBlogBySlug);
router.delete("/blogs/:id", cApi.deleteBlog);
router.post("/blogs/:id/like", cApi.likeBlog);
router.post("/blogs/:id/comment", cApi.addComment);




module.exports = router;
