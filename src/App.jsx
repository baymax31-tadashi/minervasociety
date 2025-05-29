import React, { useState } from 'react';

console.log('bg:', '/bg.jpg');
console.log('logo:', '/logo.png');
console.log('team:', '/team.png');

const events = [
  { title: "Tech Symposium", date: "June 5", description: "An all-day conference featuring talks from leading engineers." },
  { title: "Hackathon", date: "July 10", description: "Join our 24-hour coding challenge with exciting prizes." },
  { title: "AI Workshop", date: "August 15", description: "Hands-on workshop exploring artificial intelligence." },
];

function Carousel() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((index - 1 + events.length) % events.length);
  const next = () => setIndex((index + 1) % events.length);

  return (
    <div className="text-center w-full px-4">
      <h2 className="text-6xl font-bold mb-8">What's New?</h2>
      <div className="bg-[#032b3a] border border-[#f49996] p-10 rounded-xl shadow-lg max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-2">{events[index].title}</h3>
        <p className="text-lg mb-1">{events[index].date}</p>
        <p className="text-lg mb-6">{events[index].description}</p>
        <div className="flex justify-center gap-8 mt-6">
          <button onClick={prev} className="px-6 py-2 border border-[#f49996] rounded hover:bg-[#f49996]/20 transition">←</button>
          <button onClick={next} className="px-6 py-2 border border-[#f49996] rounded hover:bg-[#f49996]/20 transition">→</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="text-[#f49996] font-montserrat">
      
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 p-4 bg-[#032b3a]/90 flex justify-between items-center shadow">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
          <h1 className="text-2xl font-bold">MINERVA</h1>
        </div>
        <nav>
          <button className="px-4 py-2 border border-[#f49996] rounded hover:bg-[#f49996]/20">Home</button>
          <button disabled className="px-4 py-2 border border-[#f49996] rounded opacity-50 mx-2">Team</button>
          <button disabled className="px-4 py-2 border border-[#f49996] rounded opacity-50">Contact</button>
        </nav>
      </header>

      {/* Main Sections */}
      <main className="pt-20 snap-y snap-mandatory">

        {/* Welcome Section */}
        <section
          className="h-screen snap-start flex flex-col items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('/bg.jpg')` }}
        >
          <div className="bg-[#032b3a]/90 p-10 rounded-xl shadow-xl text-center max-w-4xl">
            <h2 className="text-6xl font-extrabold drop-shadow-md mb-4">Welcome to Our Society</h2>
            <p className="text-2xl">Unite. Innovate. Create.</p>
          </div>
        </section>

        {/* About Us */}
        <section className="h-auto snap-start flex flex-col items-center justify-center bg-cover bg-center py-20 px-6 text-[#f49996] bg-[#032b3a]/110 ">
          {/* Quote & Description Row */}
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center mb-16">
            <img src="/team.png" alt="Team Illustration" className="w-full h-auto rounded-xl shadow-lg" />
            <div className="bg-[#032b3a]/100 p-8 rounded-xl shadow-xl">
              <blockquote className="text-2xl italic mb-2 text-right">
                "We can only see a short distance ahead, but we can see plenty there that needs to be done."
              </blockquote>
              <p className="text-right font-medium mb-4">~ Alan Turing</p>
              <hr className="mb-6 border-[#f49996] w-16 mx-auto md:mx-0" />
              <p className="text-base leading-relaxed">
                Our society is dedicated to fostering a vibrant tech community through mentorship, innovation, and collaboration.
                We empower students to grow both academically and professionally.
              </p>
            </div>
          </div>

          {/* Placards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
            <div className="bg-[#032b3a]/100 p-6 rounded-lg shadow-md border border-[#f49996] transform transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-center mb-2">🎓 Academics</h3>
              <p className="text-sm text-center">We are committed to fostering academic excellence across all disciplines. Our society organizes regular workshops on cutting-edge topics, study groups for peer learning and exam preparation, and seminars featuring esteemed professors and professionals. These initiatives aim to strengthen core concepts, encourage intellectual curiosity, and build a collaborative academic environment. Whether you’re aiming to master your coursework or explore new subjects, we provide the tools and support to help you succeed.</p>
            </div>
            <div className="bg-[#032b3a]/100 p-6 rounded-lg shadow-md border border-[#f49996] transform transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-center mb-2">🧪 Research</h3>
              <p className="text-sm text-center">Innovation is at the heart of our mission. We actively support student-led research projects, host brainstorming sessions, and connect members with faculty mentors who guide them through the research process. From publishing papers to participating in national-level competitions, our members engage in meaningful scientific and technical inquiry. The society also maintains a Research Incubation Cell where interdisciplinary ideas take shape and grow into real-world solutions.</p>
            </div>
            <div className="bg-[#032b3a]/100 p-6 rounded-lg shadow-md border border-[#f49996] transform transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-center mb-2">🎉 Events</h3>
              <p className="text-sm text-center">We believe in building a vibrant, inclusive community through events that inspire, educate, and entertain. Our calendar features tech fests showcasing student talent, guest lectures by industry leaders, and hackathons that challenge creativity and collaboration. Beyond academics, we organize cultural nights, game jams, and team-building activities that help members unwind and connect. There’s always something exciting happening — and everyone’s invited.</p>
            </div>
          </div>
        </section>

        {/* What's New Carousel */}
        <section className="h-screen snap-start flex items-center justify-center bg-[#032b3a]/100 ">
          <Carousel />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#032b3a] text-[#f49996] text-center py-6">
        <p className="text-sm">© Minerva 2023. All rights reserved</p>
        <p className="text-sm">Delhi, India</p>
      </footer>
    </div>
  );
}
