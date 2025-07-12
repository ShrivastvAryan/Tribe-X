import React, { useState, useEffect } from "react";
import {
  Users,
  Zap,
  MessageCircle,
  Target,
  ArrowRight,
  Star,
  Globe,
  Heart,
  Sparkles,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Send,
  UserPlus,
  Shield,
  Rocket,
  Award,
} from "lucide-react";

export const HomeRough = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "connect", label: "Connect" },
    { id: "contact", label: "Contact" },
  ];

  const features = [
    {
      icon: Users,
      title: "Smart Matching",
      desc: "AI-powered connections based on your interests and goals",
    },
    {
      icon: MessageCircle,
      title: "Instant Collaboration",
      desc: "Start projects and conversations that matter",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      desc: "Find partners for your next big idea or creative project",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Designer",
      text: "Found my co-founder here!",
      rating: 5,
    },
    {
      name: "Alex Rivera",
      role: "Developer",
      text: "Amazing community of creators",
      rating: 5,
    },
    {
      name: "Jordan Blake",
      role: "Entrepreneur",
      text: "Best networking platform ever",
      rating: 5,
    },
  ];

  // Animated Background Component
  const AnimatedBackground = () => (
    <div className="fixed inset-0 opacity-20">
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse"
        style={{
          left: mousePosition.x * 0.02 + "%",
          top: mousePosition.y * 0.02 + "%",
        }}
      />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl animate-bounce" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl animate-pulse" />
    </div>
  );

  // Header Component
  const Header = () => (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-lg border-b border-white/10"
          : ""
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            SyncSphere
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`hover:text-purple-300 transition-colors ${
                currentPage === item.id ? "text-purple-300 font-semibold" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Get Started
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <select
            value={currentPage}
            onChange={(e) => setCurrentPage(e.target.value)}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white"
          >
            {navigationItems.map((item) => (
              <option key={item.id} value={item.id} className="bg-gray-800">
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );

  // Home Page
  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm">🎉 Join 10,000+ creators worldwide</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Find Your
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Tribe
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with like-minded creators, entrepreneurs, and innovators.
            Turn your ideas into reality with the perfect collaborators.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => setCurrentPage("connect")}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2"
            >
              <span>Start Connecting</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/20 hover:border-white/40 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm hover:bg-white/5 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Floating Cards */}
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group p-6 rounded-2xl backdrop-blur-lg border transition-all duration-500 transform hover:scale-105 ${
                    activeFeature === index
                      ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400/50 shadow-2xl shadow-purple-500/25"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <feature.icon
                    className={`w-12 h-12 mb-4 transition-colors ${
                      activeFeature === index
                        ? "text-purple-400"
                        : "text-gray-400"
                    }`}
                  />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Active Users", icon: Users },
              { number: "5K+", label: "Projects Created", icon: Target },
              { number: "50K+", label: "Connections Made", icon: Heart },
              { number: "100+", label: "Countries", icon: Globe },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">What Our Community Says</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  // About Page
  const AboutPage = () => (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SyncSphere
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're building the future of collaboration by connecting
            visionaries, creators, and innovators worldwide.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              At SyncSphere, we believe that the best ideas emerge when
              brilliant minds come together. Our platform breaks down
              geographical and social barriers to create meaningful connections
              that drive innovation and positive change.
            </p>
            <p className="text-lg text-gray-300">
              We're not just another social network – we're a catalyst for
              collaboration, a launchpad for ideas, and a community where your
              next breakthrough is just one connection away.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-lg border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <Rocket className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Innovation Hub</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Authentic Connections",
                desc: "We foster genuine relationships built on shared passions and mutual respect.",
              },
              {
                icon: Shield,
                title: "Trust & Safety",
                desc: "We maintain a secure environment where creativity and collaboration can flourish.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "We're committed to delivering exceptional experiences that exceed expectations.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <value.icon className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-16">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Emma Rodriguez", role: "CEO & Founder", image: "👩‍💼" },
              { name: "David Kim", role: "CTO", image: "👨‍💻" },
              { name: "Sophia Chen", role: "Head of Design", image: "👩‍🎨" },
            ].map((member, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Connect Page
  const ConnectPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const categories = [
      "all",
      "developers",
      "designers",
      "entrepreneurs",
      "marketers",
      "writers",
    ];

    const profiles = [
      {
        name: "Alice Johnson",
        role: "Full Stack Developer",
        category: "developers",
        skills: ["React", "Node.js", "Python"],
        image: "👩‍💻",
        location: "San Francisco, CA",
      },
      {
        name: "Mike Chen",
        role: "UI/UX Designer",
        category: "designers",
        skills: ["Figma", "Adobe XD", "Prototyping"],
        image: "👨‍🎨",
        location: "New York, NY",
      },
      {
        name: "Sarah Williams",
        role: "Startup Founder",
        category: "entrepreneurs",
        skills: ["Strategy", "Fundraising", "Leadership"],
        image: "👩‍💼",
        location: "Austin, TX",
      },
      {
        name: "Tom Rodriguez",
        role: "Digital Marketer",
        category: "marketers",
        skills: ["SEO", "Social Media", "Analytics"],
        image: "👨‍💼",
        location: "Los Angeles, CA",
      },
      {
        name: "Emma Davis",
        role: "Content Writer",
        category: "writers",
        skills: ["Copywriting", "Blogging", "SEO Writing"],
        image: "👩‍✍️",
        location: "Seattle, WA",
      },
      {
        name: "Alex Kumar",
        role: "Mobile Developer",
        category: "developers",
        skills: ["React Native", "iOS", "Android"],
        image: "👨‍💻",
        location: "Boston, MA",
      },
    ];

    const filteredProfiles = profiles.filter((profile) => {
      const matchesCategory =
        selectedCategory === "all" || profile.category === selectedCategory;
      const matchesSearch =
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });

    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6">
              Start{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Connecting
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover amazing people who share your passions and are ready to
              collaborate on your next big idea.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <input
                type="text"
                placeholder="Search by name, role, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-6 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-3 rounded-full transition-all duration-300 flex items-center space-x-2">
                <span>Search</span>
                <Target className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Profiles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredProfiles.map((profile, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3">{profile.image}</div>
                  <h3 className="text-xl font-bold mb-1">{profile.name}</h3>
                  <p className="text-purple-400 mb-2">{profile.role}</p>
                  <p className="text-sm text-gray-400 flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {profile.location}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-300 mb-2">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <UserPlus className="w-4 h-4" />
                    <span>Connect</span>
                  </button>
                  <button className="border border-white/20 hover:border-white/40 px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProfiles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">
                No profiles match your search criteria.
              </p>
              <p className="text-gray-500 mt-2">
                Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Contact Page
  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions, feedback, or want to partner with us? We'd love to
              hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 resize-none"
                    placeholder="Tell us more..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Office Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-gray-300">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-gray-300">
                      10:00 AM - 4:00 PM PST
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-300">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "How does SyncSphere matching work?",
                  answer:
                    "Our AI-powered algorithm analyzes your interests, skills, and goals to suggest the most relevant connections for collaboration.",
                },
                {
                  question: "Is SyncSphere free to use?",
                  answer:
                    "Yes! We offer a free tier with basic features. Premium plans are available for advanced matching and additional tools.",
                },
                {
                  question: "How do I ensure my privacy and security?",
                  answer:
                    "We use industry-standard encryption and never share your personal information without your explicit consent.",
                },
                {
                  question: "Can I use SyncSphere for business networking?",
                  answer:
                    "Absolutely! Many entrepreneurs and professionals use our platform to find business partners, co-founders, and collaborators.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Footer Component
  const Footer = () => (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold">SyncSphere</span>
        </div>
        <p className="text-gray-400 mb-4">
          Building the future of collaboration, one connection at a time.
        </p>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <a href="#" className="hover:text-purple-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  );

  // Main Render
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "connect":
        return <ConnectPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground />
      <Header />
      {renderPage()}
      {currentPage === "home" && (
        <section className="py-20 px-6 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-t border-white/10">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Find Your Tribe?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators, entrepreneurs, and innovators who are
              already building the future together.
            </p>
            <button
              onClick={() => setCurrentPage("connect")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2 mx-auto"
            >
              <span>Get Started Now</span>
              <Zap className="w-6 h-6" />
            </button>
          </div>
        </section>
      )}
      <Footer />
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-gray-300">hello@SyncSphere.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <p className="text-gray-300">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <p className="font-semibold">Address</p>
            <p className="text-gray-300">
              123 Innovation Street
              <br />
              San Francisco, CA 94105
            </p>
          </div>
        </div>
      </div>
    </div>

    // <div className="bg-white/5 backdrop-blur-lg border border-white
  );
  // } ;
};
