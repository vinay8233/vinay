// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Globe, Clock, Headphones, CheckCircle } from "lucide-react";

// function Home() {
//   const slides = [
//     {
//       image: "https://images.pexels.com/photos/7235894/pexels-photo-7235894.jpeg",
//       title: "Fast & Secure Visa Processing",
//       desc: "Get your visa approved quickly with our hassle-free online process.",
//     },
//     {
//       image: "https://images.pexels.com/photos/7235907/pexels-photo-7235907.jpeg",
//       title: "Trusted by Thousands",
//       desc: "We provide reliable visa and passport services worldwide.",
//     },
//     {
//       image: "https://images.pexels.com/photos/346798/pexels-photo-346798.jpeg",
//       title: "Travel Without Limits",
//       desc: "Explore the world with ease – we handle all your visa needs.",
//     },
//     {
//       image: "https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg",
//       title: "24/7 Support",
//       desc: "Our experts are available round the clock to assist you anytime.",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     pauseOnHover: true,
//     appendDots: (dots) => (
//       <div style={{ bottom: "20px" }}>
//         <ul className="flex justify-center space-x-3">{dots}</ul>
//       </div>
//     ),
//     customPaging: () => (
//       <div className="w-3 h-3 bg-white/60 rounded-full hover:bg-yellow-400 transition-all duration-300"></div>
//     ),
//   };

//   return (
//     <div className="mt-10">
//       {/* HERO SLIDER */}
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="relative">
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-[650px] object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60 flex flex-col justify-center items-center text-center px-6">
//               <h2 className="text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-6">
//                 {slide.title}
//               </h2>
//               <p className="text-white text-lg md:text-2xl max-w-2xl leading-relaxed">
//                 {slide.desc}
//               </p>
//               <button className="mt-6 bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-500 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         ))}
//       </Slider>

//       {/* WHY CHOOSE US */}
//       <section className="py-16 bg-gray-50 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
//           Why Choose Us?
//         </h2>
//         <div className="grid md:grid-cols-4 gap-8 px-6 md:px-20">
//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
//             <Clock className="mx-auto text-yellow-500 w-12 h-12 mb-4" />
//             <h3 className="text-lg font-semibold mb-2">Quick Processing</h3>
//             <p className="text-gray-600">Fast & hassle-free online visa services.</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
//             <Globe className="mx-auto text-yellow-500 w-12 h-12 mb-4" />
//             <h3 className="text-lg font-semibold mb-2">Global Coverage</h3>
//             <p className="text-gray-600">Serving clients across the world.</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
//             <Headphones className="mx-auto text-yellow-500 w-12 h-12 mb-4" />
//             <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
//             <p className="text-gray-600">Our team is here round the clock.</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
//             <CheckCircle className="mx-auto text-yellow-500 w-12 h-12 mb-4" />
//             <h3 className="text-lg font-semibold mb-2">Trusted & Secure</h3>
//             <p className="text-gray-600">Thousands of clients trust us daily.</p>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES SECTION */}
//       <section className="py-16 bg-white text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
//           Our Services
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
//           {["Visa Services", "Passport Services", "E-Visa Assistance"].map((service, i) => (
//             <div
//               key={i}
//               className="p-8 border rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition"
//             >
//               <h3 className="text-xl font-semibold mb-3 text-yellow-500">
//                 {service}
//               </h3>
//               <p className="text-gray-600">
//                 Professional support to make your travel process smooth.
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA BANNER */}
//       <section className="py-16 bg-blue-900 text-white text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           Ready to Start Your Journey?
//         </h2>
//         <p className="mb-6 text-lg">
//           Contact us today and get your visa and travel needs sorted quickly!
//         </p>
//         <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-500 hover:shadow-xl transition">
//           Get Started
//         </button>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="py-16 bg-gray-50 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
//           What Our Clients Say
//         </h2>
//         <div className="grid md:grid-cols-2 gap-8 px-6 md:px-20">
//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="text-gray-700 italic">
//               “Super fast service! I got my visa approved within 48 hours.”
//             </p>
//             <h4 className="mt-4 font-semibold text-blue-900">– John Doe</h4>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="text-gray-700 italic">
//               “Professional and trustworthy. Highly recommend their services.”
//             </p>
//             <h4 className="mt-4 font-semibold text-blue-900">– Sarah Lee</h4>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;






import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Globe, Clock, Headphones, CheckCircle } from "lucide-react";
import PassportApply from "./PassportApply"; // ✅ import your form

function Home() {
  const slides = [
    {
      image: "https://images.pexels.com/photos/7235894/pexels-photo-7235894.jpeg",
      title: "Fast & Secure Visa Processing",
      desc: "Get your visa approved quickly with our hassle-free online process.",
    },
    {
      image: "https://images.pexels.com/photos/7235907/pexels-photo-7235907.jpeg",
      title: "Trusted by Thousands",
      desc: "We provide reliable visa and passport services worldwide.",
    },
    {
      image: "https://images.pexels.com/photos/346798/pexels-photo-346798.jpeg",
      title: "Travel Without Limits",
      desc: "Explore the world with ease – we handle all your visa needs.",
    },
    {
      image: "https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg",
      title: "24/7 Support",
      desc: "Our experts are available round the clock to assist you anytime.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div style={{ bottom: "20px" }}>
        <ul className="flex justify-center space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-white/60 rounded-full hover:bg-[#F47C20] transition-all duration-300"></div>
    ),
  };

  const services = [
    {
      title: "Visa Services",
      desc: "Expert assistance in obtaining visas for any country, stress-free.",
      img: "https://media.istockphoto.com/id/480471797/photo/usa-visa.jpg?s=612x612&w=0&k=20&c=y5RJ1NhAjT0FsiQY2ULzVkROy9Kn6XWm-8UuxY0p3ys=",
    },
    {
      title: "Passport Services",
      desc: "Quick passport renewals, new applications, and hassle-free process.",
      img: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
    },
    {
      title: "E-Visa Assistance",
      desc: "Seamless electronic visa processing for global destinations.",
      img: "https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg",
    },
  ];

  return (
    <div className="mt-10">
      {/* HERO SLIDER */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#F47C20] drop-shadow-lg mb-6 animate-fadeInUp">
                {slide.title}
              </h2>
              <p className="text-white text-lg md:text-2xl max-w-2xl leading-relaxed animate-fadeInUp delay-200">
                {slide.desc}
              </p>
              <button className="mt-6 bg-[#F47C20] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#d8660f] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* APPLY FORM SECTION */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0C3C66] mb-0">
          Apply for Passport / Visa / OCI
        </h2>
        <PassportApply />
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-0 bg-gradient-to-b from-gray-50 to-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0C3C66] mb-12">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 px-6 md:px-20">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-2">
            <Clock className="mx-auto text-[#F47C20] w-14 h-14 mb-4 animate-bounce" />
            <h3 className="text-xl font-semibold mb-2">Quick Processing</h3>
            <p className="text-gray-600">Fast & hassle-free online visa services.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-2">
            <Globe className="mx-auto text-[#F47C20] w-14 h-14 mb-4 animate-spin-slow" />
            <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
            <p className="text-gray-600">Serving clients across the world.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-2">
            <Headphones className="mx-auto text-[#F47C20] w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our team is here round the clock.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-2">
            <CheckCircle className="mx-auto text-[#F47C20] w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trusted & Secure</h3>
            <p className="text-gray-600">Thousands of clients trust us daily.</p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0C3C66] mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10 px-6 md:px-20">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#F47C20]">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#0C3C66] to-[#092847] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-pulse">
          Ready to Start Your Journey?
        </h2>
        <p className="mb-6 text-lg">
          Contact us today and get your visa and travel needs sorted quickly!
        </p>
        <button className="bg-[#F47C20] text-white px-10 py-4 rounded-full font-semibold shadow-md hover:bg-[#d8660f] hover:shadow-2xl transform hover:-translate-y-1 transition">
          Get Started
        </button>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0C3C66] mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-10 px-6 md:px-20">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2">
            <p className="text-gray-700 italic text-lg">
              “Super fast service! I got my visa approved within 48 hours.”
            </p>
            <h4 className="mt-6 font-semibold text-[#0C3C66]">– John Doe</h4>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2">
            <p className="text-gray-700 italic text-lg">
              “Professional and trustworthy. Highly recommend their services.”
            </p>
            <h4 className="mt-6 font-semibold text-[#0C3C66]">– Sarah Lee</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
