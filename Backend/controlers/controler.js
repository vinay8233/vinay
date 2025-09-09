// const Contact =require("../models/Contact");
// const Application = require("../models/Application");


// // Create new contact message
// exports.createContact = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     res.status(201).json({ message: "Message sent successfully", data: newContact });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Get all messages (for admin)
// exports.getAllContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ createdAt: -1 });
//     res.status(200).json({ data: contacts });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Update status (e.g., mark as replied)




// exports.deleteContact = async (req, res) => {
//   try {
//     await Contact.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Contact deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };




// // Create new Visa Application
// exports.createApplication = async (req, res) => {
//   try {
//     const { firstName, lastName, phone, email, country, consularCategory, subCategory } = req.body;

//     // Get uploaded files
//     const filePaths = req.files.map(file => file.path);

//     const newApp = new Application({
//       firstName,
//       lastName,
//       phone,
//       email,
//       country,
//       consularCategory,
//       subCategory,
//       documents: filePaths,
//     });

//     await newApp.save();

//     res.status(201).json({ message: "Application submitted successfully", application: newApp });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to submit application" });
//   }
// };


// // Get all Visa Applications (for admin)
// exports.getAllApplications = async (req, res) => {
//   try {
//     const applications = await Application.find().sort({ createdAt: -1 });
//     res.status(200).json(applications);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get single Visa Application by ID
// exports.getApplicationById = async (req, res) => {
//   try {
//     const application = await Application.findById(req.params.id);
//     if (!application) {
//       return res.status(404).json({ message: "Application not found" });
//     }
//     res.status(200).json({ data: application });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Delete  Application
// exports.deleteApplication = async (req, res) => {
//   try {
//     await Application.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Application deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };






// const Contact = require("../models/Contact");
// const Application = require("../models/Application");
// const Plan = require("../models/Plan"); // <-- Import Plan model

// // ---------------- CONTACT -----------------

// // Create new contact message
// exports.createContact = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     res.status(201).json({ message: "Message sent successfully", data: newContact });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Get all messages (for admin)
// exports.getAllContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ createdAt: -1 });
//     res.status(200).json({ data: contacts });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Delete Contact
// exports.deleteContact = async (req, res) => {
//   try {
//     await Contact.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Contact deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ---------------- VISA APPLICATION -----------------

// // Create new Visa Application
// exports.createApplication = async (req, res) => {
//   try {
//     const { firstName, lastName, phone, email, country, consularCategory, subCategory } = req.body;

//     const filePaths = req.files?.map(file => file.path) || [];

//     const newApp = new Application({
//       firstName,
//       lastName,
//       phone,
//       email,
//       country,
//       consularCategory,
//       subCategory,
//       documents: filePaths,
//     });

//     await newApp.save();

//     res.status(201).json({ message: "Application submitted successfully", application: newApp });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to submit application" });
//   }
// };

// // Get all Visa Applications
// exports.getAllApplications = async (req, res) => {
//   try {
//     const applications = await Application.find().sort({ createdAt: -1 });
//     res.status(200).json(applications);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get single Visa Application by ID
// exports.getApplicationById = async (req, res) => {
//   try {
//     const application = await Application.findById(req.params.id);
//     if (!application) {
//       return res.status(404).json({ message: "Application not found" });
//     }
//     res.status(200).json({ data: application });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Delete Application
// exports.deleteApplication = async (req, res) => {
//   try {
//     await Application.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Application deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ---------------- PLAN MANAGEMENT -----------------

// // Create new Plan
// exports.createPlan = async (req, res) => {
//   try {
//     const { category, citizenship, visaCountry, subCategories, plans } = req.body;

//     const updatedSubs = subCategories.map((sub) => ({
//       ...sub,
//       govtFees: Number(sub.govtFees) || 0,
//       ourFees: Number(sub.ourFees) || 0,
//       totalFees: (Number(sub.govtFees) || 0) + (Number(sub.ourFees) || 0),
//     }));

//     const newPlan = new Plan({
//       category,
//       citizenship,
//       visaCountry: category === "visa" ? visaCountry : undefined, // ✅ Save only if visa
//       subCategories: updatedSubs,
//       plans: plans || [],
//     });

//     await newPlan.save();
//     res.status(201).json({ message: "Plan created successfully", data: newPlan });
//   } catch (err) {
//     console.error("❌ Error creating plan:", err);
//     res.status(500).json({ message: err.message });
//   }
// };

// // Get all Plans
// exports.getAllPlans = async (req, res) => {
//   try {
//     const plans = await Plan.find().sort({ createdAt: -1 });
//     res.status(200).json({ data: plans });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get Plan by ID
// exports.getPlanById = async (req, res) => {
//   try {
//     const plan = await Plan.findById(req.params.id);
//     if (!plan) return res.status(404).json({ message: "Plan not found" });
//     res.status(200).json({ data: plan });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update Plan
// exports.updatePlan = async (req, res) => {
//   try {
//     const { category, citizenship, visaCountry, subCategories, plans } = req.body;

//     const updatedSubs = subCategories.map((sub) => ({
//       ...sub,
//       govtFees: Number(sub.govtFees) || 0,
//       ourFees: Number(sub.ourFees) || 0,
//       totalFees: (Number(sub.govtFees) || 0) + (Number(sub.ourFees) || 0),
//     }));

//     const updatedPlan = await Plan.findByIdAndUpdate(
//       req.params.id,
//       {
//         category,
//         citizenship,
//         visaCountry: category === "visa" ? visaCountry : undefined, // ✅ Save only if visa
//         subCategories: updatedSubs,
//         plans: plans || [],
//       },
//       { new: true }
//     );

//     if (!updatedPlan) return res.status(404).json({ message: "Plan not found" });

//     res.status(200).json({ message: "Plan updated successfully", data: updatedPlan });
//   } catch (err) {
//     console.error("Error updating plan:", err);
//     res.status(500).json({ message: "Server Error", error: err.message });
//   }
// };

// // Delete Plan
// exports.deletePlan = async (req, res) => {
//   try {
//     await Plan.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Plan deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };







const Contact = require("../models/Contact");
const Application = require("../models/Application");
const Plan = require("../models/Plan");
const Blog = require("../models/Blogs"); 

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv").config();






exports.register = async (req, res) => {
  try {
    const { fullName, mobile, email, password, confirmPassword } = req.body;

    if (!fullName || (!mobile && !email) || !password || !confirmPassword) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { mobile }]
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already registered with this email or mobile" });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user but not verified
    const user = new User({
      fullName,
      mobile,
      email,
      password: hashedPassword,
      otp,
      isVerified: false // make sure this field exists in your schema
    });

    await user.save();

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    // Send OTP via email
    if (email) {
      await transporter.sendMail({
        from: `"Docudost" <${process.env.MAIL_USER}>`,
        to: email,
        subject: "Verify your account - Docudost",
        html: `<p>Hello ${fullName},</p><p>Your OTP is: <b>${otp}</b></p>`
      });
    }

    res.status(201).json({ message: "OTP sent to your email", userId: user._id });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};

// ------------------ VERIFY OTP ------------------
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.otp !== otp) return res.status(400).json({ message: "Invalid OTP" });

    user.isVerified = true;
    user.otp = undefined; // clear OTP after verification
    await user.save();

    res.status(200).json({ message: "Account verified successfully" });
  } catch (err) {
    res.status(500).json({ message: "OTP verification failed", error: err.message });
  }
};



// ------------------ LOGIN ------------------
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.isVerified) return res.status(401).json({ message: "Please verify your OTP first" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteuser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ---------------- CONTACT -----------------

// Create new contact message
exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Message sent successfully", data: newContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all messages (for admin)

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.replyContact = async (req, res) => {
  try {
    const { contactId, replyMessage } = req.body;
    const contact = await Contact.findById(contactId);
    if (!contact) return res.status(404).json({ message: "Contact not found" });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Docudost" <${process.env.MAIL_USER}>`,
      to: contact.email,
      subject: "Reply from Docudost",
      html: `<p>Hi <b>${contact.name}</b>,</p>
             <p>Thanks for contacting us. Here's our reply:</p>
             <blockquote>${contact.message}</blockquote>
             <p><b>Our Reply:</b></p>
             <p>${replyMessage}</p>
             <p>Regards,<br/>Team Docudost</p>`,
    });

    contact.status = "resolved";
    contact.replyMessage = replyMessage;
    await contact.save();

    res.json({ message: "Reply sent successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ---------------- VISA APPLICATION -----------------

// Create new Visa Application
exports.createApplication = async (req, res) => {
  try {
    const { planId, subCategory, fullName, email, phone, passportNo } = req.body;

    let plan = null;
    let paymentAmount = 0;
    let category = "";
    let citizenship = "";
    let visaCountry = null;

    if (planId) {
      plan = await Plan.findById(planId);
      if (!plan) return res.status(404).json({ error: "Plan not found" });

      const sub = plan.subCategories.find(s => s.name === subCategory);
      if (!sub) return res.status(400).json({ error: "Invalid subCategory" });

      paymentAmount = sub.totalFees;
      category = plan.category;
      citizenship = plan.citizenship;
      visaCountry = plan.visaCountry || null;
    }

    const filePaths = req.files?.map(file => file.path) || [];

    const newApp = new Application({
      planId: planId || null,
      fullName,
      email,
      phone,
      passportNo,
      category,
      citizenship,
      visaCountry,
      subCategory,
      paymentAmount,
      documents: filePaths,
    });

    await newApp.save();

    res.status(201).json({ message: "Application submitted successfully", application: newApp });
  } catch (err) {
    console.error("❌ Error saving application:", err);
    res.status(500).json({ error: "Failed to submit application" });
  }
};

// Get all Visa Applications
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single Visa Application by ID
exports.getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) return res.status(404).json({ message: "Application not found" });
    res.status(200).json({ data: application });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Application
exports.deleteApplication = async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Application deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ---------------- PLAN MANAGEMENT -----------------

// Create new Plan
exports.createPlan = async (req, res) => {
  try {
    const { category, citizenship, visaCountry, subCategories, plans } = req.body;

    const updatedSubs = subCategories.map(sub => ({
      ...sub,
      govtFees: Number(sub.govtFees) || 0,
      ourFees: Number(sub.ourFees) || 0,
      totalFees: (Number(sub.govtFees) || 0) + (Number(sub.ourFees) || 0),
    }));

    const newPlan = new Plan({
      category,
      citizenship,
      visaCountry: category === "visa" ? visaCountry : undefined,
      subCategories: updatedSubs,
      plans: plans || [],
    });

    await newPlan.save();
    res.status(201).json({ message: "Plan created successfully", data: newPlan });
  } catch (err) {
    console.error("❌ Error creating plan:", err);
    res.status(500).json({ message: err.message });
  }
};

// Get all Plans
exports.getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find().sort({ createdAt: -1 });
    res.status(200).json({ data: plans });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Plan by ID
// exports.getPlanById = async (req, res) => {
//   try {
//     const plan = await Plan.findById(req.params.id);
//     if (!plan) return res.status(404).json({ message: "Plan not found" });
//     res.status(200).json({ data: plan });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.getPlanById = async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id);
    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }
    res.json(plan); // ✅ send plan directly
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Update Plan
exports.updatePlan = async (req, res) => {
  try {
    const { category, citizenship, visaCountry, subCategories, plans } = req.body;

    const updatedSubs = subCategories.map(sub => ({
      ...sub,
      govtFees: Number(sub.govtFees) || 0,
      ourFees: Number(sub.ourFees) || 0,
      totalFees: (Number(sub.govtFees) || 0) + (Number(sub.ourFees) || 0),
    }));

    const updatedPlan = await Plan.findByIdAndUpdate(
      req.params.id,
      {
        category,
        citizenship,
        visaCountry: category === "visa" ? visaCountry : undefined,
        subCategories: updatedSubs,
        plans: plans || [],
      },
      { new: true }
    );

    if (!updatedPlan) return res.status(404).json({ message: "Plan not found" });

    res.status(200).json({ message: "Plan updated successfully", data: updatedPlan });
  } catch (err) {
    console.error("Error updating plan:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Delete Plan
exports.deletePlan = async (req, res) => {
  try {
    await Plan.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Plan deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ---------------- BLOG MANAGEMENT -----------------

// Create Blog
// exports.createBlog = async (req, res) => {
//   try {
//     const blog = new Blog(req.body);
//     await blog.save();
//     res.status(201).json({ success: true, blog });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };


// Create Blog with file uploads
exports.createBlog = async (req, res) => {
  try {
    const { title, description, content, category, tags, status } = req.body;
    const seoData = req.body.seo ? JSON.parse(req.body.seo) : {};

    if (!title || !description || !content || !category) {
      return res.status(400).json({ success: false, message: "Title, description, content, and category are required" });
    }

    const slug = title.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now();

    // Handle main image
    let mainImage = "";
    if (req.files?.image && req.files.image[0]) {
      mainImage = "/uploads/" + req.files.image[0].filename;
    }

    // Handle gallery images
    let galleryImages = [];
    if (req.files?.gallery) {
      galleryImages = req.files.gallery.map(file => "/uploads/" + file.filename);
    }

    const tagsArray = tags ? tags.split(",").map(t => t.trim()) : [];

    const blog = new Blog({
      title,
      slug,
      description,
      content,
      category,
      tags: tagsArray,
      image: mainImage,
      gallery: galleryImages,
      status: status || "draft",
      seo: {
        metaTitle: seoData.metaTitle || "",
        metaDescription: seoData.metaDescription || "",
        keywords: seoData.keywords || [],
      },
    });

    const savedBlog = await blog.save();
    res.status(201).json({ success: true, blog: savedBlog });
  } catch (error) {
    console.error("Create Blog Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};







// Get all Blogs
exports.getBlogs = async (req, res) => {
  try {
    const { category, tag, search, page = 1, limit = 10 } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (tag) filter.tags = { $in: [tag] };
    if (search) filter.title = { $regex: search, $options: "i" };

    const blogs = await Blog.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Blog.countDocuments(filter);

    res.json({ success: true, total, blogs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get single Blog by Slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { slug: req.params.slug },
      { $inc: { views: 1 } },
      { new: true }
    );
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.json({ success: true, blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update Blog
exports.updateBlog = async (req, res) => {
  try {
    const { title, description, content, category, tags, status } = req.body;
    const seoData = req.body.seo ? JSON.parse(req.body.seo) : {};

    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

    // Update text fields
    if (title) blog.title = title;
    if (description) blog.description = description;
    if (content) blog.content = content;
    if (category) blog.category = category;
    if (status) blog.status = status;
    blog.tags = tags ? tags.split(",").map(t => t.trim()) : blog.tags;

    // Update SEO
    blog.seo = {
      metaTitle: seoData.metaTitle || blog.seo?.metaTitle || "",
      metaDescription: seoData.metaDescription || blog.seo?.metaDescription || "",
      keywords: seoData.keywords || blog.seo?.keywords || [],
    };

    // Update main image if uploaded
    if (req.files?.image && req.files.image[0]) {
      blog.image = "/uploads/" + req.files.image[0].filename;
    }

    // Update gallery images if uploaded
    if (req.files?.gallery && req.files.gallery.length > 0) {
      const newGallery = req.files.gallery.map(file => "/uploads/" + file.filename);
      blog.gallery = newGallery; // Replace old gallery completely
      // If you want to keep old gallery images, use:
      // blog.gallery = [...blog.gallery, ...newGallery];
    }

    const updatedBlog = await blog.save();
    res.json({ success: true, blog: updatedBlog });
  } catch (error) {
    console.error("Update Blog Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// Delete Blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Like Blog
exports.likeBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.json({ success: true, likes: blog.likes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Add Comment to Blog
exports.addComment = async (req, res) => {
  try {
    const { user, message } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $push: { comments: { user, message } } },
      { new: true }
    );
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.json({ success: true, comments: blog.comments });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};



