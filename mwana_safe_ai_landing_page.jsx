import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [chat, setChat] = useState([{
    role: "bot",
    text: "Hi, I am MwanaSafe AI Assistant. Ask me about climate risks and child safety."
  }]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newChat = [...chat, { role: "user", text: input }];

    // simple demo response
    newChat.push({
      role: "bot",
      text: "This is a demo AI response. In full version, I will provide climate alerts and safety guidance for children."
    });

    setChat(newChat);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <header className="bg-green-600 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">MwanaSafe AI</h1>
        <p className="mt-4 text-lg">
          Protecting children before disaster strikes using AI-powered climate alerts
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white text-green-700 px-6 py-2 rounded-xl font-semibold">
            Get Early Access
          </button>

          <a
            href="https://wa.me/254745491449"
            className="bg-green-800 text-white px-6 py-2 rounded-xl font-semibold"
            target="_blank"
          >
            WhatsApp Us
          </a>
        </div>
      </header>

      {/* INVESTOR PITCH SECTION */}
      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Investor Pitch</h2>
        <p className="text-gray-700 mb-2">
          MwanaSafe AI is an AI-powered climate intelligence platform designed to protect children
          from floods, heatwaves, pollution, and disease outbreaks across Africa.
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Real-time early warning system</li>
          <li>AI-powered climate risk prediction</li>
          <li>SMS & WhatsApp alerts for low-connectivity areas</li>
          <li>Child-focused safety recommendations</li>
          <li>Open-source and scalable across developing regions</li>
        </ul>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="bg-gray-100 p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Early Access List</h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-xl border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="bg-green-600 text-white px-6 py-2 rounded-xl">
              Subscribe
            </button>
          </form>
        ) : (
          <p className="text-green-700 font-semibold">Thank you for subscribing!</p>
        )}
      </section>

      {/* LIVE MAP (SIMULATED) */}
      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Climate Risk Map (Demo)</h2>
        <div className="bg-blue-100 h-64 flex items-center justify-center rounded-xl">
          <p className="text-gray-700">
            Interactive map will show flood, heat, and air quality risk zones here (Google Maps / Mapbox integration).
          </p>
        </div>
      </section>

      {/* AI CHATBOT DEMO */}
      <section className="bg-gray-100 p-10">
        <h2 className="text-2xl font-bold mb-4 text-center">AI Chatbot Demo</h2>

        <div className="max-w-2xl mx-auto bg-white p-4 rounded-xl shadow">
          <div className="h-64 overflow-y-auto border p-2 mb-2">
            {chat.map((c, i) => (
              <p key={i} className={c.role === "user" ? "text-right" : "text-left"}>
                <span className={c.role === "user" ? "text-blue-600" : "text-green-600"}>
                  {c.text}
                </span>
              </p>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              className="flex-1 border px-3 py-2 rounded"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about climate risks..."
            />
            <button onClick={sendMessage} className="bg-green-600 text-white px-4 rounded">
              Send
            </button>
          </div>
        </div>
      </section>

      {/* DOMAIN SETUP INFO */}
      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Domain & Branding</h2>
        <p className="text-gray-700">
          Recommended domain: <strong>mwanasafe.ai</strong> or <strong>mwanasafe.org</strong>
        </p>
        <p className="text-gray-700 mt-2">
          Once approved, we will connect hosting and deploy the platform for public access.
        </p>
      </section>

      {/* TEAM */}
      <section className="p-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Team</h2>
        <p>Lewis Owino – Founder & CEO</p>
        <p>Fiona Nelima – Co-Founder</p>
        <p>Benta Oyoo – Co-Founder</p>
        <p>Pinto Oyoo – Team Member</p>
        <p>Stacy Patricia – Team Member</p>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-600 text-white p-10 text-center">
        <h2 className="text-xl font-bold">Protecting Children Before Disaster Strikes</h2>
        <p className="mt-2">mwanasafe.ai@gmail.com</p>

        <a
          href="https://wa.me/254745491449"
          className="inline-block mt-4 bg-white text-green-700 px-6 py-2 rounded-xl font-semibold"
          target="_blank"
        >
          Chat on WhatsApp
        </a>
      </footer>
    </div>
  );
}
