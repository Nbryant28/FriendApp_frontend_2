"use client";
import { motion } from "framer-motion";

export default function Dashboard() {
  const theme = "vibrant"; // "vibrant" | "dark" | "minimal"

  // 🎨 Theme presets
  const themes = {
    vibrant: {
      bg: "bg-gray-50",
      text: "text-gray-900",
      heading:
        "bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent",
      button: "bg-yellow-300 text-black hover:brightness-110",
      card: "bg-white text-gray-700 hover:shadow-xl",
    },
    dark: {
      bg: "bg-gray-900",
      text: "text-gray-100",
      heading: "text-indigo-400",
      button: "bg-pink-500 text-white hover:bg-pink-600",
      card: "bg-gray-800 text-gray-200 hover:shadow-lg",
    },
    minimal: {
      bg: "bg-slate-50",
      text: "text-slate-900",
      heading: "text-teal-600",
      button: "bg-emerald-400 text-white hover:bg-emerald-500",
      card: "bg-white text-gray-700 border border-gray-100 hover:shadow-md",
    },
  };

  const style = themes[theme];

  const tiles = [
    { title: "Plan Dinner", desc: "Pick date, time, budget." },
    { title: "Invite Friends", desc: "Send quick link or choose contacts." },
    { title: "Voting", desc: "Friends vote in real-time." },
    { title: "Itinerary", desc: "Lock final spot, map & RSVP." },
    { title: "Past Plans", desc: "Re-run favorite nights." },
  ];

  return (
    <div className={`min-h-screen p-8 ${style.bg} ${style.text}`}>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h1
          className={`text-4xl md:text-5xl font-extrabold leading-tight ${style.heading}`}
        >
          Plan Amazing Nights <br />
          With Friends — Effortlessly
        </h1>
        <p className="mt-6 text-lg opacity-80">
          Stop guessing where to go. Use NightOut Navigator to plan, invite,
          and lock down the perfect night — all in one place.
        </p>
        <button
          className={`mt-8 px-6 py-3 rounded-lg font-bold shadow transition ${style.button}`}
        >
          + Start a New Plan
        </button>
      </motion.section>

      {/* Dashboard Tiles */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {tiles.map((card, i) => (
          <motion.div
            key={i}
            className={`rounded-xl p-8 text-center cursor-pointer transition-all ${style.card}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p className="mt-3 opacity-80">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}