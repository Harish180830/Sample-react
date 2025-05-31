import React, { useState } from "react";

const navItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "profile", label: "Profile" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "interests", label: "Interests" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          button.nav-button {
            transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          }

          button.nav-button:hover:not(.active) {
            background-color: #60a5fa; /* Tailwind blue-400 */
            color: white;
            transform: translateX(5px);
            box-shadow: 0 4px 10px rgba(96, 165, 250, 0.5);
          }

          button.nav-button.active {
            background-color: #3b82f6; /* Tailwind blue-500 */
            color: white;
            border-left: 4px solid #1e40af; /* Tailwind blue-900 */
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.7);
            transform: translateX(8px);
          }
        `}
      </style>

      <div className="flex min-h-screen font-sans text-gray-900 bg-gradient-to-b from-white via-sky-200 to-black">
        {/* Sidebar */}
        <aside className="w-60 bg-gradient-to-b from-white via-sky-200 to-black text-gray-900 flex flex-col p-6 shadow-lg">
          <h1 className="text-2xl font-semibold mb-8 border-b border-gray-300 pb-3">
            Harish S
          </h1>
          <nav className="flex flex-col space-y-3">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`nav-button text-left px-4 py-2 rounded-md font-medium ${
                  activeTab === id
                    ? "active"
                    : "bg-white bg-opacity-70 hover:bg-blue-300"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main
          key={activeTab}
          className="flex-1 p-10 bg-white bg-opacity-80 rounded-l-3xl shadow-xl max-w-5xl mx-auto my-10"
          style={{ animation: "fadeIn 0.5s ease forwards" }}
        >
          {activeTab === "dashboard" && (
            <>
              <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
              <p className="text-lg">
                Hi, I'm <strong>Harish S</strong>, a B.Tech AI & Data Science
                student. I'm passionate about building efficient, maintainable,
                and user-friendly web applications using modern tech.
              </p>
            </>
          )}

          {activeTab === "profile" && (
            <>
              <h2 className="text-3xl font-bold mb-4">Profile</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Phone:</strong> 7339693213</li>
                <li><strong>Email:</strong> harish14005j@gmail.com</li>
                <li><strong>LinkedIn:</strong> <a className="text-blue-600 underline" href="https://www.linkedin.com/in/harish-s-07b640254" target="_blank" rel="noreferrer">harish-s-07b640254</a></li>
                <li><strong>GitHub:</strong> <a className="text-blue-600 underline" href="https://github.com/Harish180830/project" target="_blank" rel="noreferrer">Harish180830</a></li>
                <li><strong>Languages Known:</strong> Malayalam, English, Tamil, Hindi</li>
              </ul>
            </>
          )}

          {/* ... include all other tabs content as before ... */}

          {activeTab === "education" && (
            <>
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>B.Tech in AI & Data Science (2022–2026)</strong> - Karpagam Academy of Higher Education</li>
                <li><strong>HSC (2020):</strong> Saraswathi Ramchandra Vidyalaya - 74%</li>
                <li><strong>SSLC (2018):</strong> Saraswathi Ramchandra Vidyalaya - 66%</li>
              </ul>
            </>
          )}

          {activeTab === "skills" && (
            <>
              <h2 className="text-3xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Technical Skills:</h3>
                  <ul className="list-disc ml-6">
                    <li>C, C++, Java, Python, JavaScript</li>
                    <li>HTML, CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Personal Skills:</h3>
                  <ul className="list-disc ml-6">
                    <li>Critical Thinking</li>
                    <li>Teamwork</li>
                    <li>Resilience</li>
                    <li>Learning Agility</li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === "projects" && (
            <>
              <h2 className="text-3xl font-bold mb-4">Projects</h2>
              <div className="bg-white p-5 rounded shadow-md">
                <h3 className="text-xl font-semibold">Sentimental Analysis on Product Review</h3>
                <p><strong>Duration:</strong> 2 Months</p>
                <p><strong>Language:</strong> Python</p>
                <p>Analyzing product reviews using sentiment analysis to classify them as positive, negative, or neutral.</p>
              </div>
            </>
          )}

          {activeTab === "certificates" && (
            <>
              <h2 className="text-3xl font-bold mb-4">Certificates</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Python Foundation – Infosys Springboard (2024)</li>
                <li>Data Science – Prime Solution (2024)</li>
                <li>Data Science – Gozler ED Tech (2023)</li>
                <li>Fundamentals of AI – NPTEL (2023)</li>
              </ul>
            </>
          )}

          {activeTab === "interests" && (
            <>
              <h2 className="text-3xl font-bold mb-4">Area of Interest</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Data Analyst</li>
                <li>Full Stack Development</li>
                <li>Software Testing</li>
              </ul>
            </>
          )}

          {activeTab === "achievements" && (
            <>
              <h2 className="text-3xl font-bold mb-4">Achievements & Activities</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Winner – Zonal Level Handball Tournament (2019)</li>
                <li>Runner-up – KPR Sport Fest Handball (2018)</li>
                <li>Second Class – State-level English Proficiency (2012, Bharath Institute)</li>
                <li>Academic Competitions</li>
                <li>Volunteer Works</li>
                <li>Athletic Participation</li>
              </ul>
            </>
          )}

          {activeTab === "contact" && (
            <>
              <h2 className="text-3xl font-bold mb-4">Contact</h2>
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
                  className="w-full px-4 py-2 border border-gray-400 rounded-md"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-400 rounded-md"
                  required
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-400 rounded-md"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600 transition"
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
