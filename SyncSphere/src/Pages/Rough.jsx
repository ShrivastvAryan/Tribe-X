// User Profile View Component
const UserProfile = () => {
  const userConnections = connections
    .map((connectionId) => users.find((u) => u.id === connectionId))
    .filter(Boolean);

  const userGroups = groups.filter((group) =>
    group.members.includes(currentUser.id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-600">My Profile</h1>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setCurrentView("dashboard")}
              className="text-gray-600 hover:text-purple-600 font-medium"
            >
              Discover
            </button>
            <button
              onClick={() => setCurrentView("chat")}
              className="text-gray-600 hover:text-purple-600 font-medium"
            >
              Chat
            </button>
            <button
              onClick={() => setCurrentView("groups")}
              className="text-gray-600 hover:text-purple-600 font-medium"
            >
              Groups
            </button>
            <button
              onClick={() => setCurrentView("profile")}
              className="p-2 text-gray-600 hover:text-purple-600"
            >
              <Settings size={20} />
            </button>
          </div>
        </div>
      </nav>

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
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {userGroups.length}
                      </div>
                      <div className="text-sm text-gray-600">Groups</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {currentUser.interests.length}
                      </div>
                      <div className="text-sm text-gray-600">Interests</div>
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentView("profile")}
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
              {userConnections.length === 0 ? (
                <p className="text-gray-500">
                  No connections yet. Start connecting with people!
                </p>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {userConnections.map((user) => (
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
                      <button
                        onClick={() => {
                          setActiveChat(user.id);
                          setCurrentView("chat");
                        }}
                        className="ml-4 p-2 text-purple-600 hover:bg-purple-50 rounded-lg"
                      >
                        <MessageCircle size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Groups */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">My Groups</h3>
              {userGroups.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">
                    You haven't joined any groups yet.
                  </p>
                  <button
                    onClick={() => setCurrentView("groups")}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Discover Groups
                  </button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {userGroups.map((group) => (
                    <div
                      key={group.id}
                      className="border rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div className="flex items-center mb-3">
                        <div className="text-2xl mr-3">{group.avatar}</div>
                        <div>
                          <h4 className="font-medium">{group.name}</h4>
                          <p className="text-sm text-gray-600">
                            {group.members.length} members
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        {group.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {group.interests.map((interest) => (
                          <span
                            key={interest}
                            className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs"
                          >
                            {interest}
                          </span>
                        ))}
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

// Chat System Component
const ChatSystem = () => {
  const userConnections = connections
    .map((connectionId) => users.find((u) => u.id === connectionId))
    .filter(Boolean);

  const sendMessage = () => {
    if (!newMessage.trim() || !activeChat) return;

    const messageId = Date.now();
    const chatKey = `${Math.min(currentUser.id, activeChat)}-${Math.max(
      currentUser.id,
      activeChat
    )}`;

    setMessages((prev) => ({
      ...prev,
      [chatKey]: [
        ...(prev[chatKey] || []),
        {
          id: messageId,
          sender: currentUser.id,
          content: newMessage,
          timestamp: new Date().toLocaleTimeString(),
        },
      ],
    }));

    setNewMessage("");
  };

  const getChatMessages = (userId) => {
    const chatKey = `${Math.min(currentUser.id, userId)}-${Math.max(
      currentUser.id,
      userId
    )}`;
    return messages[chatKey] || [];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-600">Chat</h1>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setCurrentView("dashboard")}
              className="text-gray-600 hover:text-purple-600 font-medium"
            >
              Discover
            </button>
            <button
              onClick={() => setCurrentView("groups")}
              className="text-gray-600 hover:text-purple-600 font-medium"
            >
              Groups
            </button>
            <button
              onClick={() => setCurrentView("user-profile")}
              className="text-gray-600 hover:text-purple-600 font-medium"
            >
              My Profile
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6 h-96">
          {/* Connections List */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Connections</h3>
            </div>
            <div className="overflow-y-auto h-80">
              {userConnections.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  No connections yet
                </div>
              ) : (
                <div className="divide-y">
                  {userConnections.map((user) => (
                    <button
                      key={user.id}
                      onClick={() => setActiveChat(user.id)}
                      className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                        activeChat === user.id
                          ? "bg-purple-50 border-r-2 border-purple-600"
                          : ""
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-xl">{user.avatar}</div>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-600">
                            {user.location}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow flex flex-col">
            {activeChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b flex items-center space-x-3">
                  <div className="text-2xl">
                    {users.find((u) => u.id === activeChat)?.avatar}
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {users.find((u) => u.id === activeChat)?.name}
                    </h4>
                    <p className="text-sm text-gray-600">Online</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {getChatMessages(activeChat).map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === currentUser.id
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          message.sender === currentUser.id
                            ? "bg-purple-600 text-white"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <p>{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button
                      onClick={sendMessage}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                Select a connection to start chatting
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Groups System Component
const GroupsSystem = () => {
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [newGroup, setNewGroup] = useState({
    name: "",
    description: "",
    interests: [],
    avatar: "👥",
  });

  const toggleGroupInterest = (interest) => {
    setNewGroup((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const createGroup = () => {
    if (!newGroup.name.trim()) return;

    const group = {
      id: Date.now(),
      ...newGroup,
      members: [currentUser.id],
      creator: currentUser.id,
    };

    setGroups((prev) => [...prev, group]);
    setNewGroup({ name: "", description: "", interests: [], avatar: "👥" });
    setShowCreateGroup(false);
  };

  const joinGroup = (groupId) => {
    setGroups((prev) =>
      prev.map((group) =>
        group.id === groupId
          ? { ...group, members: [...group.members, currentUser.id] }
          : group
      )
    );
  };

  const leaveGroup = (groupId) => {
    setGroups((prev) =>
      prev.map((group) =>
        group.id === groupId
          ? {
              ...group,
              members: group.members.filter((id) => id !== currentUser.id),
            }
          : group
      )
    );
  };

  const userGroups = groups.filter((group) =>
    group.members.includes(currentUser.id)
  );
  const availableGroups = groups.filter(
    (group) => !group.members.includes(currentUser.id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-600">Groups</h1>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setCurrentView("dashboard")}
              className="text-gray-600 hover:text-purple-600 font-medium"
            >
              Discover
            </button>
            <button
              onClick={() => setCurrentView("chat")}
              className="text-gray-600 hover:text-purple-600 font-medium"
            >
              Chat
            </button>
            <button
              onClick={() => setCurrentView("user-profile")}
              className="text-gray-600 hover:text-purple-600 font-medium"
            >
              My Profile
            </button>
            <button
              onClick={() => setShowCreateGroup(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
            >
              <Plus size={16} />
              <span>Create Group</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* My Groups */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">My Groups</h2>
          {userGroups.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <div className="text-4xl mb-4">👥</div>
              <p className="text-gray-500 mb-4">
                You haven't joined any groups yet.
              </p>
              <button
                onClick={() => setShowCreateGroup(true)}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Create Your First Group
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userGroups.map((group) => (
                <div key={group.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{group.avatar}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{group.name}</h3>
                      <p className="text-sm text-gray-600">
                        {group.members.length} members
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{group.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {group.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                      View Group
                    </button>
                    {group.creator !== currentUser.id && (
                      <button
                        onClick={() => leaveGroup(group.id)}
                        className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        Leave
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Discover Groups */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Discover Groups</h2>
          {availableGroups.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-500">No new groups to discover.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableGroups.map((group) => (
                <div key={group.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{group.avatar}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{group.name}</h3>
                      <p className="text-sm text-gray-600">
                        {group.members.length} members
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{group.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {group.interests.map((interest) => (
                      <span
                        key={interest}
                        className={`px-2 py-1 rounded-full text-xs ${
                          currentUser.interests.includes(interest)
                            ? "bg-purple-100 text-purple-800 font-medium"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => joinGroup(group.id)}
                    className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Join Group
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Create Group Modal */}
      {showCreateGroup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Create New Group</h3>
              <button
                onClick={() => setShowCreateGroup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Group Name
                </label>
                <input
                  type="text"
                  value={newGroup.name}
                  onChange={(e) =>
                    setNewGroup((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={newGroup.description}
                  onChange={(e) =>
                    setNewGroup((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Group Interests
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
                  {availableInterests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleGroupInterest(interest)}
                      className={`px-3 py-1 rounded-full text-sm transition-all ${
                        newGroup.interests.includes(interest)
                          ? "bg-purple-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={createGroup}
                  disabled={!newGroup.name.trim()}
                  className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  Create Group
                </button>
                <button
                  onClick={() => setShowCreateGroup(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
import React, { useState, useEffect } from "react";
import {
  User,
  MessageCircle,
  Users,
  Heart,
  Settings,
  Search,
  Plus,
  X,
} from "lucide-react";

const InterestMatchingPlatform = () => {
  const [currentView, setCurrentView] = useState("landing");
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [connections, setConnections] = useState([]);
  const [messages, setMessages] = useState({});
  const [groups, setGroups] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  // Sample interests for the platform
  const availableInterests = [
    "Web Development",
    "AI/ML",
    "Design",
    "Startups",
    "Music",
    "Photography",
    "Gaming",
    "Fitness",
    "Cooking",
    "Travel",
    "Reading",
    "Art",
    "Movies",
    "Technology",
    "Marketing",
    "Writing",
    "Dancing",
    "Sports",
    "Investment",
  ];

  // Sample users data
  const sampleUsers = [
    {
      id: 1,
      name: "Alex Chen",
      bio: "Full-stack developer passionate about AI and startups",
      interests: ["Web Development", "AI/ML", "Startups"],
      location: "San Francisco",
      avatar: "👨‍💻",
    },
    {
      id: 2,
      name: "Sarah Kim",
      bio: "UX Designer who loves photography and travel",
      interests: ["Design", "Photography", "Travel"],
      location: "New York",
      avatar: "👩‍🎨",
    },
    {
      id: 3,
      name: "Mike Johnson",
      bio: "Music producer and fitness enthusiast",
      interests: ["Music", "Fitness", "Technology"],
      location: "Austin",
      avatar: "🎵",
    },
  ];

  // Sample groups data
  const sampleGroups = [
    {
      id: 1,
      name: "AI Enthusiasts",
      description:
        "Discussing the latest in artificial intelligence and machine learning",
      members: [1, 2],
      interests: ["AI/ML", "Technology"],
      creator: 1,
      avatar: "🤖",
    },
    {
      id: 2,
      name: "Design Collective",
      description: "Sharing design inspiration and collaborating on projects",
      members: [2],
      interests: ["Design", "Art"],
      creator: 2,
      avatar: "🎨",
    },
  ];

  useEffect(() => {
    setUsers(sampleUsers);
    setGroups(sampleGroups);
  }, []);

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-6 animate-pulse">
            Find Your Tribe
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Connect with like-minded individuals. Collaborate. Create. Grow
            together.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => setCurrentView("register")}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Get Started
            </button>
            <button
              onClick={() => setCurrentView("login")}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all"
            >
              Login
            </button>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-white">
          <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
            <Users className="mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Connect</h3>
            <p>Find people who share your passions and interests</p>
          </div>
          <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
            <MessageCircle className="mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Collaborate</h3>
            <p>Work together on exciting projects and ideas</p>
          </div>
          <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
            <Heart className="mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Grow</h3>
            <p>Build meaningful relationships and expand your network</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Registration Component
  const Registration = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      bio: "",
      interests: [],
      location: "",
    });

    const toggleInterest = (interest) => {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.includes(interest)
          ? prev.interests.filter((i) => i !== interest)
          : [...prev.interests, interest],
      }));
    };

    const handleSubmit = () => {
      const newUser = {
        id: Date.now(),
        ...formData,
        avatar: "👤",
      };
      setCurrentUser(newUser);
      setUsers((prev) => [...prev, newUser]);
      setCurrentView("dashboard");
    };

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Join Our Community
            </h2>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bio
                </label>
                <textarea
                  value={formData.bio}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, bio: e.target.value }))
                  }
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us about yourself..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="City, State"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Select Your Interests (Choose at least 3)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {availableInterests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                        formData.interests.includes(interest)
                          ? "bg-purple-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Selected: {formData.interests.length}
                </p>
              </div>

              <button
                onClick={handleSubmit}
                disabled={
                  formData.interests.length < 3 ||
                  !formData.name ||
                  !formData.email ||
                  !formData.password
                }
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Create Account
              </button>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setCurrentView("login")}
                className="text-purple-600 hover:underline"
              >
                Already have an account? Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Login Component
  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
      // For demo purposes, login with first sample user
      setCurrentUser(sampleUsers[0]);
      setCurrentView("dashboard");
    };

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Login
            </button>
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={() => setCurrentView("register")}
              className="text-purple-600 hover:underline"
            >
              Don't have an account? Sign up
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Dashboard Component
  const Dashboard = () => {
    const getMatchScore = (user1, user2) => {
      const commonInterests = user1.interests.filter((interest) =>
        user2.interests.includes(interest)
      );
      return Math.round(
        (commonInterests.length /
          Math.max(user1.interests.length, user2.interests.length)) *
          100
      );
    };

    const potentialMatches = users
      .filter((user) => user.id !== currentUser.id)
      .map((user) => ({
        ...user,
        matchScore: getMatchScore(currentUser, user),
      }))
      .sort((a, b) => b.matchScore - a.matchScore);

    const handleConnect = (userId) => {
      setConnections((prev) => [...prev, userId]);
    };

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-purple-600">ConnectTribe</h1>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setCurrentView("dashboard")}
                className="text-gray-600 hover:text-purple-600 font-medium"
              >
                Discover
              </button>
              <button
                onClick={() => setCurrentView("chat")}
                className="text-gray-600 hover:text-purple-600 font-medium"
              >
                Chat
              </button>
              <button
                onClick={() => setCurrentView("groups")}
                className="text-gray-600 hover:text-purple-600 font-medium"
              >
                Groups
              </button>
              <button
                onClick={() => setCurrentView("user-profile")}
                className="text-gray-600 hover:text-purple-600 font-medium"
              >
                My Profile
              </button>
              <span className="text-gray-700">
                Welcome, {currentUser.name}!
              </span>
              <button
                onClick={() => setCurrentView("profile")}
                className="p-2 text-gray-600 hover:text-purple-600"
              >
                <Settings size={20} />
              </button>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* User Profile Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">{currentUser.avatar}</div>
                  <h3 className="font-semibold text-lg">{currentUser.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {currentUser.location}
                  </p>
                  <p className="text-gray-700 mb-4">{currentUser.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {currentUser.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="font-semibold mb-4">Your Connections</h4>
                {connections.length === 0 ? (
                  <p className="text-gray-500 text-sm">
                    No connections yet. Start connecting!
                  </p>
                ) : (
                  <div className="space-y-2">
                    {connections.map((connectionId) => {
                      const user = users.find((u) => u.id === connectionId);
                      return user ? (
                        <div
                          key={connectionId}
                          className="flex items-center space-x-2"
                        >
                          <span className="text-lg">{user.avatar}</span>
                          <span className="text-sm">{user.name}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Potential Matches */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">
                Discover People Like You
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {potentialMatches.map((user) => (
                  <div
                    key={user.id}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">{user.avatar}</div>
                      <h3 className="font-semibold text-lg">{user.name}</h3>
                      <p className="text-gray-600 text-sm">{user.location}</p>
                      <div className="mt-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          {user.matchScore}% Match
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm mb-4">{user.bio}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {user.interests.map((interest) => (
                        <span
                          key={interest}
                          className={`px-2 py-1 rounded-full text-xs ${
                            currentUser.interests.includes(interest)
                              ? "bg-purple-100 text-purple-800 font-medium"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {interest}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleConnect(user.id)}
                        disabled={connections.includes(user.id)}
                        className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                          connections.includes(user.id)
                            ? "bg-green-100 text-green-800 cursor-not-allowed"
                            : "bg-purple-600 text-white hover:bg-purple-700"
                        }`}
                      >
                        {connections.includes(user.id)
                          ? "Connected"
                          : "Connect"}
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <MessageCircle size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Profile Edit Component
  const ProfileEdit = () => {
    const [editData, setEditData] = useState({ ...currentUser });

    const toggleInterest = (interest) => {
      setEditData((prev) => ({
        ...prev,
        interests: prev.interests.includes(interest)
          ? prev.interests.filter((i) => i !== interest)
          : [...prev.interests, interest],
      }));
    };

    const handleSave = () => {
      setCurrentUser(editData);
      setUsers((prev) =>
        prev.map((user) => (user.id === editData.id ? editData : user))
      );
      setCurrentView("dashboard");
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-purple-600">Edit Profile</h1>
            <button
              onClick={() => setCurrentView("dashboard")}
              className="text-gray-600 hover:text-purple-600"
            >
              <X size={24} />
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="bg-white rounded-lg shadow p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) =>
                    setEditData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bio
                </label>
                <textarea
                  value={editData.bio}
                  onChange={(e) =>
                    setEditData((prev) => ({ ...prev, bio: e.target.value }))
                  }
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={editData.location}
                  onChange={(e) =>
                    setEditData((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Interests
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {availableInterests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                        editData.interests.includes(interest)
                          ? "bg-purple-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleSave}
                  className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setCurrentView("dashboard")}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render current view
  const renderCurrentView = () => {
    switch (currentView) {
      case "landing":
        return <LandingPage />;
      case "register":
        return <Registration />;
      case "login":
        return <Login />;
      case "dashboard":
        return <Dashboard />;
      case "profile":
        return <ProfileEdit />;
      default:
        return <LandingPage />;
    }
  };

  return <div className="font-sans">{renderCurrentView()}</div>;
};

export default InterestMatchingPlatform;
