import { Heart, Shield, Award, Rocket } from "lucide-react";

export const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
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
                geographical and social barriers to create meaningful
                connections that drive innovation and positive change.
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
                  desc: `'We're committed to delivering exceptional experiences that exceed expectations.`,
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
    </div>
  );
};
