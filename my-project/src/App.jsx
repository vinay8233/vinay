
import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";

// Website Components
import Navbar from "./Components/Webpages/Navbar";
import Home from "./Components/Webpages/Home";
import About from "./Components/Webpages/About";
import Contact from "./Components/Webpages/Contact";
import Services from "./Components/Webpages/Services";
import Footer from "./Components/Webpages/Footer";

// Admin Components
import AdminLayout from "./Components/Admin components/AdminLayout";
import AdminDashboard from "./Components/Admin components/AdminDashboard";
import ManageServices from "./Components/Admin components/ManageServices";
import ManageQueries from "./Components/Admin components/ManageQueries";
import AdminLogin from "./Components/Admin components/AdminLogin";
import ProtectedRoute from "./Components/Admin components/ProtectedRoute";
import Header from "./Components/Webpages/Header";
import VisaApply from "./Components/Webpages/VisaApply";
import PassportApply from "./Components/Webpages/PassportApply";
import ManagePlan from "./Components/Admin components/ManagePlan";
import PlansPage from "./Components/Webpages/PlansPage";
import ApplicationForm from "./Components/Webpages/ApplicationForm";
import Blog from "./Components/Webpages/Blog";
import ManageBlogs from "./Components/Admin components/ManageBlogs";
import BlogDetail from "./Components/Webpages/BlogDetail";
import Register from "./Components/Webpages/Register";
import Login from "./Components/Webpages/UserLogin";
import ManageUsers from "./Components/Admin components/Manageusers";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        {/* Website Routes */}
        <Route
          path="/"
          element={
            <>
            <Header />
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        /><Route
          path="/register"
          element={
            <>
            <Header />
              <Navbar />
              <Register />
              <Footer />
            </>
          }
        /><Route
          path="/login"
          element={
            <>
            <Header />
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        />
         <Route
          path="/visa-apply"
          element={
            <>
            <Header />
              <Navbar />
              <VisaApply />
              <Footer />
            </>
          }
        />
        <Route
          path="/passport-apply"
          element={
            <>
            <Header />
              <Navbar />
              <PassportApply />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
            <Header />
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
            <Header />
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
            <Header />
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
            <Header />
              <Navbar />
              <Blog />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
            <Header />
              <Navbar />
              <Blog />
              <Footer />
            </>
          }
        />
        <Route
          path="/blogs/:slug"
          element={
            <>
            <Header />
              <Navbar />
              <BlogDetail />
              <Footer />
            </>
          }
        />
        <Route
          path="/plans"
          element={
            <>
            <Header />
              <Navbar />
              <PlansPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/apply/:planId"
          element={
            <>
            <Header />
              <Navbar />
              <ApplicationForm />
              <Footer />
            </>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/services"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <ManageServices />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/manage-plans"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <ManagePlan />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/manage-users"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <ManageUsers />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/manage-blogs"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <ManageBlogs />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/queries"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <ManageQueries />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
