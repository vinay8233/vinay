import { Users, Globe, Target, CheckCircle, Award, Headphones } from "lucide-react"; 

function About() {
  return (
    <div className="mt-16">
      {/* HERO SECTION */}
      <section className="relative h-[250px]">
        <img
          src="https://images.pexels.com/photos/346798/pexels-photo-346798.jpeg"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-black/60 flex items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
            About <span className="text-white">Us</span>
          </h1>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a trusted agency providing professional Visa, Passport, and E-Visa
              services for clients worldwide. Our mission is to simplify your travel
              documentation with quick processing, transparent communication, and
              secure systems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With years of experience, a global client base, and a dedicated support
              team, we ensure your journey is smooth and stress-free from start to finish.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
              alt="Our Team"
              className="rounded-xl shadow-lg hover:shadow-2xl transition"
            />
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
          <div className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2">
            <Users className="mx-auto text-yellow-500 w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Integrity</h3>
            <p className="text-gray-600">
              Transparent and ethical services you can trust.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2">
            <Globe className="mx-auto text-yellow-500 w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Reliability</h3>
            <p className="text-gray-600">
              On-time delivery with consistent high-quality support.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2">
            <Target className="mx-auto text-yellow-500 w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Customer Focus</h3>
            <p className="text-gray-600">
              Dedicated support tailored to meet your travel needs.
            </p>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-center text-white">
  <h2 className="text-3xl md:text-4xl font-bold mb-12">
    Our Achievements
  </h2>
  <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
    <div className="p-8 bg-white/10 rounded-xl shadow hover:shadow-xl transition">
      <CheckCircle className="mx-auto text-yellow-400 w-14 h-14 mb-4" />
      <h3 className="text-xl font-semibold mb-3">50,000+ Visas Approved</h3>
      <p className="text-gray-200">Trusted by travelers across the globe.</p>
    </div>
    <div className="p-8 bg-white/10 rounded-xl shadow hover:shadow-xl transition">
      <Award className="mx-auto text-yellow-400 w-14 h-14 mb-4" />
      <h3 className="text-xl font-semibold mb-3">10+ Years Experience</h3>
      <p className="text-gray-200">Industry leaders in visa & passport services.</p>
    </div>
    <div className="p-8 bg-white/10 rounded-xl shadow hover:shadow-xl transition">
      <Headphones className="mx-auto text-yellow-400 w-14 h-14 mb-4" />
      <h3 className="text-xl font-semibold mb-3">24/7 Global Support</h3>
      <p className="text-gray-200">Round-the-clock expert assistance.</p>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-white-400 to-yellow-500 text-center text-blue-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Make Your Travel Easy
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Contact us today and get your visa & passport needs handled
          professionally with quick, secure, and reliable services.
        </p>
        <button className="bg-yellow-400 text-white px-10 py-4 rounded-full font-semibold shadow-md hover:bg-blue-800 hover:shadow-2xl transform hover:-translate-y-1 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
}

export default About;
