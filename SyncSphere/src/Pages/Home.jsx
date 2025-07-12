import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatedBackground } from "../Components/ui/AnimatedBackground";
import {
  Users,
  MessageCircle,
  Target,
  ArrowRight,
  Star,
  Globe,
  Heart,
  ChevronDown,
  Zap,
} from "lucide-react";

export const Home = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground />

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
            <Link
              to="/registration"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-t border-white/10">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Find Your Tribe?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of creators, entrepreneurs, and innovators who are
            already building the future together.
          </p>
          <Link
            to="/connect"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2 mx-auto w-fit"
          >
            <span>Get Started Now</span>
            <Zap className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};
