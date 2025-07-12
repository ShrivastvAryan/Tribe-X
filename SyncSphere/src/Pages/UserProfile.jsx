// import { useState } from "react";

export const UserProfile = () => {
  //   const [currentUser, setCurrentUser] = useState({});
  const currentUser = {
    avatar: "👨‍💻",
    name: "Dharmesh",
    location: "India",
    bio: "Full-stack developer passionate about AI and startups",
    interests: ["Chess", "Design", "Photography"],
  };
  console.log(currentUser);

  const connections = [
    {
      avatar: "👩‍🎨",
      name: "Deepak",
      location: "India",
      interests: ["Chess", "Design", "Photography"],
    },
    {
      avatar: "👨‍💻",
      name: "Aryan",
      location: "India",
      interests: ["Coder", "Graphics", "Music"],
    },
  ];

  //   const userConnections = connections
  //     .map((connectionId) => users.find((u) => u.id === connectionId))
  //     .filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Header */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">{currentUser.avatar}</div>
                <h2 className="text-2xl font-bold mb-2">{currentUser.name}</h2>
                <p className="text-gray-600 mb-4">{currentUser.location}</p>
                <p className="text-gray-700 mb-6">{currentUser.bio}</p>

                <div className="space-y-4">
                  <div className="flex justify-center space-x-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {connections.length}
                      </div>
                      <div className="text-sm text-gray-600">Connections</div>
                    </div>
                    {/* <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {userGroups.length}
                      </div>
                      <div className="text-sm text-gray-600">Groups</div>
                    </div> */}
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {currentUser.interests.length}
                      </div>
                      <div className="text-sm text-gray-600">Interests</div>
                    </div>
                  </div>

                  <button
                    // onClick={() => setCurrentView("profile")}
                    className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Interests */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">My Interests</h3>
              <div className="flex flex-wrap gap-2">
                {currentUser.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Connections */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">My Connections</h3>
              {/* userConnections.length */}
              {connections.length === 0 ? (
                <p className="text-gray-500">
                  No connections yet. Start connecting with people!
                </p>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {/* userConnections.map() */}
                  {connections.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="text-2xl mr-4">{user.avatar}</div>
                      <div className="flex-1">
                        <h4 className="font-medium">{user.name}</h4>
                        <p className="text-sm text-gray-600">{user.location}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {user.interests.slice(0, 2).map((interest) => (
                            <span
                              key={interest}
                              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
