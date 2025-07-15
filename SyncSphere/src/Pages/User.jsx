import { useState,useEffect } from "react";
import React from "react";
import { Header } from "../Components/Layout/Header";
import { Footer } from "../Components/Layout/Footer";
import { AnimatedBackground } from "../Components/ui/AnimatedBackground";
import { Target, MessageCircle, UserPlus, MapPin,SendHorizonal, SendHorizontal } from "lucide-react";

const User=()=>{


     const profiles = [
    {
      name: "Alice Johnson",
      role: "Full Stack Developer",
      category: "developers",
      skills: ["React", "Node.js", "Python"],
      image: "👩‍💻",
      location: "San Francisco, CA",
    },
]
    return(

       <>
  <div className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
    <AnimatedBackground />

    <div className="w-[90vw] mx-auto h-auto flex flex-col lg:flex-row gap-6">
      
      {/* Profile List */}
      <div className="w-full lg:w-[30%] h-full space-y-4">
        {profiles.map((profile, index) => (
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
          </div>
        ))}
      </div>

      {/* Chat Box */}
      <div className="w-full lg:w-[70%] h-auto p-4 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 shadow-2xl space-y-4">
        
        {/* Chat Window */}
        <div className="h-[400px] bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
          <div className="h-full flex flex-col justify-end p-4 gap-4">
            <div className="self-end text-white text-sm h-auto w-auto p-2 bg-pink-700 rounded-r-2xl rounded-tl-2xl">
              Hi there!
            </div>
            <div className="self-start text-gray-900 dark:text-white text-sm h-auto w-auto p-2 bg-gray-200 dark:bg-gray-700 rounded-l-2xl rounded-tr-2xl">
              Aur kya haal
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="w-full h-14 p-2 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 flex items-center gap-3">
          <input 
            className="flex-1 h-full bg-white/10 backdrop-blur-sm text-white placeholder-white/50 rounded-xl px-4 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-all duration-200" 
            type="text"
            placeholder="Type a message..."
          />
          <button className="h-full aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex justify-center items-center hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg">
            <SendHorizontal className="text-white" size={20} />
          </button>
        </div>
      </div>
    </div>
  </div>
</>

    )
}

export default User