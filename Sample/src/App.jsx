import React, { useState, useEffect } from "react";

const navItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "profile", label: "Profile" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const fadeInStyle = {
    animation: "fadeIn 0.5s ease forwards",
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .sidebar-gradient {
            background: linear-gradient(180deg, #ffffff 0%, #bae6fd 50%, #000000 100%);
          }
        `}
      </style>

      <div className="flex min-h-screen font-sans text-gray-900 bg-gradient-to-b from-white via-sky-200 to-black">
        {/* Sidebar */}
        <aside className="w-56 sidebar-gradient text-gray-900 flex flex-col p-6 shadow-lg">
          <h1 className="text-2xl font-semibold mb-8 border-b border-gray-300 pb-3">
            Harish S
          </h1>
          <nav className="flex flex-col space-y-3">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`text-left px-4 py-2 rounded-md font-medium focus:outline-none transition-colors duration-300 ${
                  activeTab === id
                    ? "bg-blue-400 text-white shadow-md border-l-4 border-blue-700"
                    : "bg-white bg-opacity-70 hover:bg-blue-300"
                }`}
                aria-current={activeTab === id ? "page" : undefined}
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main
          key={activeTab}
          className="flex-1 p-10 bg-white bg-opacity-70 rounded-l-3xl shadow-xl max-w-5xl mx-auto my-10 animate-fadeIn"
        >
          {activeTab === "dashboard" && (
            <>
              <h2 className="text-3xl font-bold mb-6 border-b border-gray-400 pb-2">
                Dashboard
              </h2>
              <p className="text-lg leading-relaxed">
                Hello! I'm <strong>Harish S</strong>, a B.Tech student in
                Artificial Intelligence & Data Science at Karpagam Academy of
                Higher Education. I'm passionate about Full-Stack Development
                and eager to contribute to innovative teams.
              </p>
            </>
          )}

          {activeTab === "profile" && (
            <>
              <h2 className="text-3xl font-bold mb-6 border-b border-gray-400 pb-2">
                Profile
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-900">
                <li>
                  <strong>Phone:</strong> 7339693213
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:harish14005j@gmail.com"
                    className="text-blue-600 underline"
                  >
                    harish14005j@gmail.com
                  </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/harish-s-07b640254"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    harish-s-07b640254
                  </a>
                </li>
                <li>
                  <strong>GitHub:</strong>{" "}
                  <a
                    href="https://github.com/Harish180830/project"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    Harish180830
                  </a>
                </li>
                <li>
                  <strong>Languages Known:</strong> Malayalam, English, Tamil,
                  Hindi
                </li>
              </ul>
            </>
          )}

          {activeTab === "projects" && (
            <>
              <h2 className="text-3xl font-bold mb-6 border-b border-gray-400 pb-2">
                Projects
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Sentimental Analysis on Product Review
                  </h3>
                  <p className="text-gray-800 mb-1">
                    <strong>Duration:</strong> 2 Months
                  </p>
                  <p className="text-gray-800 mb-1">
                    <strong>Language Used:</strong> Python
                  </p>
                  <p className="text-gray-800">
                    Analyzing product reviews using sentiment analysis
                    techniques to classify them as positive, negative, or
                    neutral.
                  </p>
                </div>
              </div>
            </>
          )}

          {activeTab === "contact" && (
            <>
              <h2 className="text-3xl font-bold mb-6 border-b border-gray-400 pb-2">
                Contact
              </h2>
              <form
                className="max-w-md space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for contacting!");
                }}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-gray-400 rounded-md text-gray-900"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-400 rounded-md text-gray-900"
                  required
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-400 rounded-md text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-400 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-500 transition"
                >
                  Send
                </button>
              </form>
            </>
          )}
        </main>
      </div>
    </>
  );
}
