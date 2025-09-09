import {
  Globe2,
  FileCheck,
  Stamp,
  Plane,
  ShieldCheck,
  Headset,
} from "lucide-react";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      icon: <Globe2 className="w-10 h-10 text-yellow-400" />,
      title: "Visa Services",
      desc: "Fast and reliable assistance for Tourist, Business, and Student visas for multiple countries.",
    },
    {
      icon: <Stamp className="w-10 h-10 text-yellow-400" />,
      title: "Passport Services",
      desc: "End-to-end support for new passport applications, renewals, and urgent Tatkal services.",
    },
    {
      icon: <FileCheck className="w-10 h-10 text-yellow-400" />,
      title: "E-Visa Services",
      desc: "Hassle-free electronic visa processing with step-by-step guidance and document verification.",
    },
    {
      icon: <Plane className="w-10 h-10 text-yellow-400" />,
      title: "Travel Assistance",
      desc: "Complete travel guidance including visa interview preparation and flight bookings.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-yellow-400" />,
      title: "Travel Insurance",
      desc: "Affordable and comprehensive travel insurance plans for a stress-free journey abroad.",
    },
    {
      icon: <Headset className="w-10 h-10 text-yellow-400" />,
      title: "24/7 Consultation",
      desc: "Our expert team is available round the clock to answer all your visa and passport queries.",
    },
  ];

  return (
    <div className="mt-16">
      {/* HERO SECTION */}
      <section className="relative h-[250px]">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Our <span className="text-yellow-400">Services</span>
          </h1>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
          What We Offer
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition border-t-4 border-yellow-400"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
          How We Work
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {["Consultation", "Document Collection", "Processing", "Approval"].map(
            (step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-yellow-400 text-blue-900 font-bold text-lg mb-3">
                  {i + 1}
                </div>
                <h4 className="text-lg font-semibold text-blue-900">{step}</h4>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Apply for Your Visa or Passport Today
        </h2>
        <p className="mb-6 text-lg">
          Get expert assistance and make your international travel hassle-free.
        </p>
        <button className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-semibold shadow-md hover:bg-yellow-500 hover:shadow-xl transform hover:-translate-y-1 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}

export default Services;
