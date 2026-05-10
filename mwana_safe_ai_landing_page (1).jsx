import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <header className="bg-green-600 text-white text-center p-12">
        <h1 className="text-5xl font-bold">MwanaSafe AI</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          AI-powered climate early warning system protecting children from floods, heatwaves,
          pollution, and disease outbreaks across Africa.
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://mwanasafe.ai"
            className="bg-white text-green-700 px-6 py-2 rounded-xl font-semibold"
          >
            Live Website
          </a>

          <a
            href="https://wa.me/254745491449"
            className="bg-green-800 text-white px-6 py-2 rounded-xl font-semibold"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </header>

      {/* PROBLEM */}
      <section className="p-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">The Problem</h2>
        <p className="text-gray-700">
          Children in vulnerable communities face increasing risks from climate disasters,
          yet lack access to timely, localized early warning systems.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="bg-gray-100 p-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
          <p className="text-gray-700 mb-6">
            MwanaSafe AI uses artificial intelligence and climate data to predict risks
            and send real-time safety alerts via SMS, WhatsApp, and web platforms.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">AI Risk Prediction</h3>
              <p className="text-sm text-gray-600 mt-2">
                Forecast floods, heatwaves, and pollution risks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">Real-Time Alerts</h3>
              <p className="text-sm text-gray-600 mt-2">
                SMS and WhatsApp notifications for communities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">Child Safety Focus</h3>
              <p className="text-sm text-gray-600 mt-2">
                Designed specifically to protect children first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="p-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Impact</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Early warning access for underserved communities</li>
          <li>Reduced child vulnerability during disasters</li>
          <li>Climate resilience through AI-driven insights</li>
        </ul>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="bg-gray-100 p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Early Access</h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded-xl border"
              required
            />
            <button className="bg-green-600 text-white px-6 py-2 rounded-xl">
              Subscribe
            </button>
          </form>
        ) : (
          <p className="text-green-700 font-semibold">Thank you for joining MwanaSafe AI!</p>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-green-600 text-white p-10 text-center">
        <h2 className="text-xl font-bold">MwanaSafe AI</h2>
        <p className="mt-2">Protecting children before disaster strikes</p>

        <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center">
          <a href="mailto:mwanasafe.ai@gmail.com">mwanasafe.ai@gmail.com</a>
          <a href="https://wa.me/254745491449" target="_blank" rel="noreferrer">
            WhatsApp: +254745491449
          </a>
        </div>
      </footer>
    </div>
  );
}
