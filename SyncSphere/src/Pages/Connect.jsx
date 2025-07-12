import { useState } from "react";
import { Target, MessageCircle, UserPlus, MapPin } from "lucide-react";
import { AnimatedBackground } from "../Components/ui/AnimatedBackground";

export const Connect = () => {
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
    <div className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground />

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
