import React, { useState, useEffect } from "react";
import { Download, MapPin, ChevronDown, ChevronUp, BookOpen, Pencil, Video, Clock, Users, Award, MessageCircleHeart, Amphora } from "lucide-react";

const App = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const [selectedArtefact, setSelectedArtefact] = useState(null);

  const toggleCard = (id) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const scrollToArtefact = (id) => {
    setSelectedArtefact(id);
    const element = document.getElementById(`artefact-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => setSelectedArtefact(null), 2000);
    }
  };

  // Artefacts data
  const artefacts = [
    {
      id: 1,
      name: "Medals",
      description: "Various medals and ribbons.",
      teacherNote: "Research one medal's meaning and create an award citation for a story character."
    },
    {
      id: 2,
      name: "Gas Mask and Canister",
      description: "A dark gas mask with large eye-pieces and a corrugated hose leading to a canister. Issued to protect against chemical attacks.",
      teacherNote: "Vocabulary activity: describe what it looks like and how it might feel."
    },
    {
      id: 3,
      name: "Helmet with Red Star",
      description: "A green military helmet with a red star painted on the front (Soviet or Allied marking).",
      teacherNote: "Compare captions: who might have worn this? Write a short character profile."
    },
    {
      id: 4,
      name: '"WAR" Poster/Sign',
      description: 'A poster with the word "WAR" in red and text suggesting wartime propaganda.',
      teacherNote: "Analyze persuasive language and create your own poster using persuasive words."
    },
    {
      id: 5,
      name: '"HOME GUARD" Item',
      description: "An item labelled HOME GUARD — the UK volunteer defense force.",
      teacherNote: "Oral history prompt — discuss community roles during wartime."
    },
    {
      id: 6,
      name: "Civil Defence (CD) Badge",
      description: "A circular badge with letters 'CD' for Civil Defence (Air Raid Precautions).",
      teacherNote: "Role-play exercise: create short dialogues between CD volunteers."
    },
    {
      id: 7,
      name: "Binoculars / Trench Periscope",
      description: "Optical device such as binoculars or a periscope used for observation.",
      teacherNote: "Scavenger hunt activity — spot details and describe."
    },
    {
      id: 8,
      name: "Hand Grenade",
      description: "A black ovoid/cylindrical object that's used for small explosions in combat.",
      teacherNote: "Use as a vocabulary and cautious safety discussion; do not allow handling."
    },
    {
      id: 9,
      name: "Camouflage Fabric / Netting",
      description: "Camouflage fabric used for concealment.",
      teacherNote: "Art activity: design a camouflage pattern and write where it would be used."
    },
    {
      id: 10,
      name: "Map of France",
      description: 'A campaign map with "FRANCE" faintly visible.',
      teacherNote: "Geography & narrative mapping: plot a story journey on the map."
    }
  ];

  const lessons = [
    {
      title: "Explore & Describe",
      subject: "Reading & Observation",
      duration: "45-60 minutes",
      icon: BookOpen,
      objectives: [
        "Develop careful observation skills",
        "Build descriptive vocabulary",
        "Practice reading historical sources"
      ],
      materials: ["Artefact photos", "Observation worksheets", "Word banks"],
      steps: [
        "Silent observation of artefact (3-5 mins)",
        "Think-Pair-Share: What do you notice?",
        "Vocabulary building: textures, colors, shapes",
        "Reading historical context cards",
        "Individual writing: detailed description"
      ]
    },
    {
      title: "Write a Wartime Letter",
      subject: "Creative Writing",
      duration: "60 minutes",
      icon: Pencil,
      objectives: [
        "Write in first-person narrative",
        "Understand historical letter formats",
        "Express emotion through writing"
      ],
      materials: ["Letter templates", "Historical examples", "Writing frames"],
      steps: [
        "Read example wartime letters",
        "Discuss letter structure and tone",
        "Choose a character perspective",
        "Draft letter using template",
        "Peer review and editing"
      ]
    },
    {
      title: "Create a Stop-Motion Story",
      subject: "Speaking & Listening + Digital",
      duration: "90 minutes (or 2 sessions)",
      icon: Video,
      objectives: [
        "Plan and structure a narrative",
        "Collaborate in groups",
        "Use digital tools for storytelling"
      ],
      materials: ["Tablets/phones", "Stop-motion app", "Artefact props/photos"],
      steps: [
        "Storyboard planning in groups",
        "Script writing and rehearsal",
        "Photograph stop-motion frames",
        "Record narration",
        "Edit and present to class"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          color: #2F2C02;
        }
        
        h1, h2, h3, h4 {
          font-family: 'Merriweather', serif;
          font-weight: 700;
          line-height: 1.2;
        }
        
        .hero-section {
          background: linear-gradient(135deg, #2F2C02 0%, #607401 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 231, 9, 0.03) 10px, rgba(255, 231, 9, 0.03) 20px);
          pointer-events: none;
        }
        
        .army-bg {
          background-color: #2F2C02;
          background-image: 
            repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255, 231, 9, 0.05) 50px, rgba(255, 231, 9, 0.05) 51px);
        }
        
        .highlight-yellow {
          background-color: #FFE709;
          color: #2F2C02;
          padding: 2px 8px;
          border-radius: 3px;
          font-weight: 600;
        }
        
        .btn-primary {
          background-color: #D27702;
          color: white;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
        
        .btn-primary:hover {
          background-color: #FFE709;
          color: #2F2C02;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(210, 119, 2, 0.3);
        }
        
        .btn-secondary {
          background-color: #607401;
          color: white;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
        
        .btn-secondary:hover {
          background-color: #FFE709;
          color: #2F2C02;
          transform: translateY(-2px);
        }
        
        .card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }
        
        .artefact-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          border-left: 4px solid #D27702;
          transition: all 0.3s ease;
        }
        
        .artefact-card.selected {
          border-left-color: #FFE709;
          background-color: #FFFEF0;
          box-shadow: 0 8px 24px rgba(255, 231, 9, 0.3);
        }
        
        .hotspot-button {
          background: #D27702;
          color: white;
          border: 3px solid white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        
        .hotspot-button:hover {
          background: #FFE709;
          color: #2F2C02;
          transform: scale(1.2);
        }
        
        .section-title {
          font-size: 2.5rem;
          color: #2F2C02;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #D27702, #FFE709);
          border-radius: 2px;
        }
        
        .teacher-note {
          background: #FFF9E6;
          border-left: 4px solid #607401;
          padding: 12px 16px;
          margin-top: 12px;
          border-radius: 4px;
          font-style: italic;
        }
        
        .download-box {
          background: linear-gradient(135deg, #607401 0%, #66662E 100%);
          color: white;
          padding: 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
        }
        
        .download-box:hover {
          transform: translateX(4px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        
        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          
          .hero-section {
            min-height: auto;
            padding: 60px 20px;
          }
        }
        
        @media print {
          .btn-primary, .btn-secondary, .hotspot-button {
            display: none;
          }
          
          .hero-section {
            min-height: auto;
            padding: 40px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-pattern"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Year 6 Digital Storytelling Toolkit
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Stories on the Line
              </h1>
              <h2 className="text-2xl md:text-3xl mb-4 font-normal" style={{ color: '#FFE709' }}>
                The WW2 Field Telephone Toolkit
              </h2>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                A creative digital storytelling toolkit for Year 6 — built in collaboration with Teesside University, Middlesbrough Museums (Dorman Museum), and Beech Grove Primary School.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://drive.google.com/file/d/1rSR6TFE7VRLTMN4MU2WuUQOmULjpM1Wa/view" target="_blank" rel="noopener noreferrer">
                  <button className="btn-primary">
                    <Download size={20} />
                    Download Toolkit
                  </button>
                </a>
                <button className="btn-secondary" onClick={() => document.getElementById('artefacts-gallery').scrollIntoView({ behavior: 'smooth' })}>
                  <Amphora size={20} />
                  Explore Artefacts
                </button>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScj2rOCmJ3zNzE-DesLmahbGESxoOFXAYDQg3ID5uQcCbhqMg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                  <button className="btn-primary">
                    <MessageCircleHeart size={20} />
                    We Would Love Your Feedback
                  </button>
                </a>
              </div>
            </div>
            <div className="relative">
              {/* REPLACE: ww2_telephone.jpg - Main hero image of the WW2 field telephone */}
              {/* Recommended dimensions: 800x1000px, portrait orientation */}
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
                <img
                  src="/ww2_phone.png"
                  alt="WW2 Field Telephone - Historic military communication device"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="text-center mt-4 text-gray-900 font-semibold">
                  The WW2 Field Telephone
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Bringing History to Life</h2>
          <p className="text-xl mt-6 leading-relaxed text-gray-700">
            This toolkit helps teachers bring history to life. Using museum objects — starting with a WW2 field telephone — pupils explore reading, writing, speaking and listening through creative, hands-on digital storytelling.
          </p>
        </div>
      </section>

      {/* Why Museum Objects */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FFF9E6' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Why Museum Objects for Literacy?</h2>
              <p className="text-lg mt-6 leading-relaxed text-gray-700">
                Museum artefacts carry stories. When children investigate objects, they practice careful observation, vocabulary, imagination and narrative skills. This approach links real objects to classroom literacy: pupils read sources, write creative pieces, speak through performances, and listen while collaborating.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="card text-center">
                  <BookOpen size={32} className="mx-auto mb-2" style={{ color: '#D27702' }} />
                  <div className="font-semibold">Reading</div>
                </div>
                <div className="card text-center">
                  <Pencil size={32} className="mx-auto mb-2" style={{ color: '#607401' }} />
                  <div className="font-semibold">Writing</div>
                </div>
                <div className="card text-center">
                  <Users size={32} className="mx-auto mb-2" style={{ color: '#D27702' }} />
                  <div className="font-semibold">Speaking</div>
                </div>
                <div className="card text-center">
                  <Video size={32} className="mx-auto mb-2" style={{ color: '#607401' }} />
                  <div className="font-semibold">Digital Skills</div>
                </div>
              </div>
            </div>
            <div>
              {/* Stock image placeholder for classroom/museum scene */}
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
                alt="Children exploring historical artefacts in a museum setting"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside the Toolkit */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-4">What's Inside the Toolkit?</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Everything you need to deliver engaging history-literacy lessons</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Teacher Guide", desc: "One-hour training plan with step-by-step instructions", icon: "📚" },
              { title: "Three Full Lessons", desc: "Ready-to-run Year 6 lessons: reading, writing, and digital storytelling", icon: "✏️" },
              { title: "Storyboard Templates", desc: "Script templates and digital story planning sheets", icon: "🎬" },
              // { title: "Printable Worksheets", desc: "Observation sheets, reflection prompts, and assessment tools", icon: "📝" },
              { title: "Artefact Gallery", desc: "Large gallery with numbered hotspots for classroom exploration", icon: "🖼️" },
              { title: "Adobe Tutorials", desc: "Mini-tutorials for Adobe Express and free alternatives", icon: "💻" }
            ].map((item, idx) => (
              <div key={idx} className="card">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#2F2C02' }}>{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16 px-6 army-bg text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Quick Start: 3 Simple Steps</h2>
          <p className="text-center mb-12 text-xl opacity-90">Get started with your class in just three easy stages</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#FFE709' }}>Look, Ask, Imagine</h3>
              <p className="opacity-90">Introduce the WW2 telephone and do a silent observation exercise</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#FFE709' }}>Write & Share</h3>
              <p className="opacity-90">Create short pieces: letters, diary entries, or character scripts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#FFE709' }}>Make & Present</h3>
              <p className="opacity-90">Turn stories into digital narrations or stop-motion clips</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Plans */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-4">Year 6 Lesson Plans</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Three ready-to-run lessons aligned with curriculum standards</p>

          <div className="space-y-6">
            {lessons.map((lesson, idx) => {
              const Icon = lesson.icon;
              return (
                <div key={idx} className="card">
                  <div className="flex items-start gap-4 mb-4 cursor-pointer" onClick={() => toggleCard(`lesson-${idx}`)}>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: idx % 2 === 0 ? '#D27702' : '#607401' }}>
                      <Icon size={24} color="white" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{lesson.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="highlight-yellow">{lesson.subject}</span>
                            <span className="flex items-center gap-1">
                              <Clock size={16} />
                              {lesson.duration}
                            </span>
                          </div>
                        </div>
                        {expandedCards[`lesson-${idx}`] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                      </div>
                    </div>
                  </div>

                  {expandedCards[`lesson-${idx}`] && (
                    <div className="mt-6 pl-16 space-y-6 animate-fadeIn">
                      <div>
                        <h4 className="font-bold text-lg mb-2" style={{ color: '#607401' }}>Learning Objectives:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {lesson.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2" style={{ color: '#607401' }}>Materials Needed:</h4>
                        <div className="flex flex-wrap gap-2">
                          {lesson.materials.map((mat, i) => (
                            <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{mat}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2" style={{ color: '#607401' }}>Step-by-Step Procedure:</h4>
                        <ol className="space-y-2">
                          {lesson.steps.map((step, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="font-bold" style={{ color: '#D27702' }}>{i + 1}.</span>
                              <span className="text-gray-700">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div className="teacher-note">
                        <strong>Extension Ideas:</strong> Use the artefact gallery for additional writing prompts, create character profiles, or develop timeline activities linking multiple artefacts.
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Artefact - WW2 Telephone Spotlight */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-600 to-yellow-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
              ⭐ FEATURED ARTEFACT #1
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4">The WW2 Field Telephone</h2>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto">
              Voices from the past: Connecting soldiers across the battlefield
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/30">
                <h3 className="text-3xl font-bold mb-6" style={{ color: '#FFE709' }}>What is it?</h3>
                <p className="text-xl mb-6 leading-relaxed">
                  A military field telephone used in WWII for frontline communications. These robust devices allowed soldiers to communicate vital messages across trenches, command posts, and battlefields—even in the harshest conditions.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center flex-shrink-0 font-bold">
                      📞
                    </div>
                    <div>
                      <strong className="block text-yellow-300">How it worked:</strong>
                      <span className="text-white/90">Hand-cranked generator powered the signal through field cables</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center flex-shrink-0 font-bold">
                      🎖️
                    </div>
                    <div>
                      <strong className="block text-yellow-300">Who used it:</strong>
                      <span className="text-white/90">Signal Corps, commanding officers, and frontline units</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center flex-shrink-0 font-bold">
                      ⚡
                    </div>
                    <div>
                      <strong className="block text-yellow-300">Why it mattered:</strong>
                      <span className="text-white/90">Crucial for coordinating troop movements and emergency communications</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/20 rounded-lg p-6 border-l-4 border-yellow-400">
                  <h4 className="font-bold text-xl mb-3 text-yellow-300">💡 Imagine This:</h4>
                  <p className="text-white/90 leading-relaxed">
                    You're a young soldier in 1944. The telephone rings. You pick up the heavy receiver and hear a crackling voice giving orders. What message are you hearing? Who is calling? What happens next?
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                {/* REPLACE: ww2_telephone.jpg - Spotlight featured image */}
                {/* Recommended dimensions: 700x900px, high quality */}
                <div className="bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/tel_mk_v.jpg?w=700&h=900&fit=crop"
                    alt="WW2 Military Field Telephone - Close-up showing the handset, crank handle, and metal casing"
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="mt-4 text-center">
                    <div className="text-gray-900 font-bold text-lg">British Field Telephone Mk V</div>
                    {/* <div className="text-gray-600 text-sm">Dorman Museum Collection</div> */}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-orange-300 rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>

          {/* Classroom Activities Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-white text-gray-900 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-3">📝</div>
              <h4 className="font-bold text-xl mb-2" style={{ color: '#D27702' }}>Writing Activity</h4>
              <p className="text-gray-700">
                <strong>Message Home:</strong> Write a short telegram or letter from a soldier using this telephone to call home. What would they say in just 50 words?
              </p>
            </div>

            <div className="bg-white text-gray-900 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-3">🎭</div>
              <h4 className="font-bold text-xl mb-2" style={{ color: '#D27702' }}>Drama Activity</h4>
              <p className="text-gray-700">
                <strong>Role Play:</strong> Work in pairs. One person is at headquarters, the other on the front line. Create a 2-minute conversation using the telephone.
              </p>
            </div>

            <div className="bg-white text-gray-900 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-3">🎨</div>
              <h4 className="font-bold text-xl mb-2" style={{ color: '#D27702' }}>Art & Design</h4>
              <p className="text-gray-700">
                <strong>Observational Drawing:</strong> Sketch the telephone in detail. Label each part and research what it does. Create an annotated diagram.
              </p>
            </div>
          </div>

          {/* Teacher's Corner */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-white/30">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="text-3xl">👩‍🏫</span>
              Teacher's Corner
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2 text-yellow-300">Cross-Curricular Links:</h4>
                <ul className="space-y-2 text-white/90">
                  <li>• <strong>History:</strong> Communication technology in wartime</li>
                  <li>• <strong>English:</strong> Letter writing, dialogue, historical voice</li>
                  <li>• <strong>Science:</strong> How telephones work (circuits, sound waves)</li>
                  <li>• <strong>PSHE:</strong> Communication, emotions during wartime</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-yellow-300">Extension Ideas:</h4>
                <ul className="space-y-2 text-white/90">
                  <li>• Compare with modern mobile phones—what's changed?</li>
                  <li>• Research Morse code and other wartime communication methods</li>
                  <li>• Create a timeline of communication technology</li>
                  <li>• Interview grandparents about communication in their youth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artefacts Gallery - MAIN FEATURE */}
      <section id="artefacts-gallery" className="py-16 px-6" style={{ backgroundColor: '#FFF9E6' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-4">Explore more Artefacts</h2>
          <p className="text-center text-lg text-gray-700 mb-12">
            Click the numbered tags to read descriptions and discover classroom activities for each historical object
          </p>

          {/* Main Gallery Image with Hotspots */}
          <div className="mb-16 relative">
            <div className="bg-white rounded-xl shadow-2xl p-8">
              {/* REPLACE: artefacts_gallery.zip images - Create a composite gallery image */}
              {/* Or use individual artefact images positioned in a grid */}
              {/* Recommended: Create a 1400x900px composite showing all artefacts with space for numbered overlays */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg overflow-hidden">
                <img
                  src="/artefacts.png"
                  alt="WW2 Museum Artefacts Display - Multiple historical items from World War 2"
                  className="w-full h-auto"
                />

                {/* Interactive Hotspots Overlay */}
                {/* These positions are examples - adjust based on your actual composite image */}
                <div className="absolute inset-0">
                  {[
                    { id: 1, top: '85%', left: '75%' },
                    { id: 2, top: '60%', left: '30%' },
                    { id: 3, top: '50%', left: '50%' },
                    { id: 4, top: '60%', left: '24%' },
                    { id: 5, top: '80%', left: '19%' },
                    { id: 6, top: '83.5%', left: '53%' },
                    { id: 7, top: '63%', left: '92%' },
                    { id: 8, top: '79%', left: '45%' },
                    { id: 9, top: '65%', left: '60%' },
                    { id: 10, top: '75%', left: '60%' },
                  ].map(hotspot => (
                    <button
                      key={hotspot.id}
                      className="hotspot-button absolute"
                      style={{ top: hotspot.top, left: hotspot.left, transform: 'translate(-50%, -50%)' }}
                      onClick={() => scrollToArtefact(hotspot.id)}
                      aria-label={`View artefact ${hotspot.id}: ${artefacts[hotspot.id - 1].name}`}
                    >
                      {hotspot.id}
                    </button>
                  ))}
                </div>
              </div>

              {/* <div className="mt-6 text-center">
                <button className="btn-primary">
                  <Download size={20} />
                  Download Artefact ID Sheet (PDF)
                </button>
              </div> */}
            </div>
          </div>

          {/* Artefact Descriptions */}
          <div className="grid md:grid-cols-2 gap-6">
            {artefacts.map(artefact => (
              <div
                key={artefact.id}
                id={`artefact-${artefact.id}`}
                className={`artefact-card ${selectedArtefact === artefact.id ? 'selected' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl text-white" style={{ backgroundColor: artefact.featured ? '#FFE709' : '#D27702', color: artefact.featured ? '#2F2C02' : 'white' }}>
                    {artefact.id}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#2F2C02' }}>
                      {artefact.name}
                    </h3>
                    <p className="text-gray-700 mb-3">{artefact.description}</p>
                    <div className="teacher-note">
                      <strong>Teacher Activity:</strong> {artefact.teacherNote}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Storytelling Corner */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title mb-4">Digital Storytelling Corner</h2>
          <p className="text-lg text-gray-700 mb-8">
            Practical steps for creating short digital stories using accessible tools
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#607401' }}>Adobe Express Basics</h3>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold" style={{ color: '#D27702' }}>1.</span>
                  <span>Sign up for free Adobe Express account (teacher or school)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold" style={{ color: '#D27702' }}>2.</span>
                  <span>Choose "Video" template and set to 2-3 minute duration</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold" style={{ color: '#D27702' }}>3.</span>
                  <span>Upload artefact photos and student drawings</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold" style={{ color: '#D27702' }}>4.</span>
                  <span>Record voiceover narration or upload audio file</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold" style={{ color: '#D27702' }}>5.</span>
                  <span>Add text overlays and simple transitions</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold" style={{ color: '#D27702' }}>6.</span>
                  <span>Export and share with class or parents</span>
                </li>
              </ol>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#607401' }}>Free Alternatives</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong className="block mb-1">Windows Video Editor</strong>
                  <p className="text-sm text-gray-600">Built into Windows 10/11 - simple drag-and-drop interface</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong className="block mb-1">iMovie (Mac/iPad)</strong>
                  <p className="text-sm text-gray-600">Free for Apple users - professional-looking results</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong className="block mb-1">WeVideo (Web)</strong>
                  <p className="text-sm text-gray-600">Free tier available - cloud-based, works on any device</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong className="block mb-1">Stop Motion Studio</strong>
                  <p className="text-sm text-gray-600">Free app for creating stop-motion animations with photos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 card" style={{ backgroundColor: '#FFF9E6' }}>
            <h3 className="text-xl font-bold mb-3">Storyboard Template</h3>
            <p className="mb-4 text-gray-700">Use this simple 6-panel structure to plan your digital story:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Hook/Opening', 'Introduce Object', 'Historical Context', 'Personal Connection', 'Story/Message', 'Closing/Call to Action'].map((panel, idx) => (
                <div key={idx} className="bg-white p-4 rounded border-2 border-dashed border-gray-300 text-center">
                  <div className="text-sm font-bold mb-1" style={{ color: '#D27702' }}>Panel {idx + 1}</div>
                  <div className="text-xs text-gray-600">{panel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Training Session */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title mb-4">1-Hour Teacher Training Session</h2>
          <p className="text-lg text-gray-700 mb-8">
            A complete workshop plan to introduce this toolkit to your teaching team
          </p>

          <div className="card">
            <div className="space-y-4">
              {[
                { time: '0–10 mins', title: 'Introduction & Objectives', desc: 'Welcome, toolkit overview, and learning outcomes for today' },
                { time: '10–25 mins', title: 'Hands-On Exploration', desc: 'Examine the field telephone artefact, silent observation, quick-write activity: "What stories does this object hold?"' },
                { time: '25–45 mins', title: 'Digital Storytelling Demo', desc: 'Live demonstration of Adobe Express basics, show example Year 6 student digital story, discuss adaptation for different abilities' },
                { time: '45–55 mins', title: 'Group Planning', desc: 'Teachers work in pairs to adapt one lesson plan for their specific class context and needs' },
                { time: '55–60 mins', title: 'Feedback & Next Steps', desc: 'Q&A session, share contact information, distribute toolkit materials, complete evaluation form' }
              ].map((segment, idx) => (
                <div key={idx} className="flex gap-4 pb-4 border-b border-gray-200 last:border-0">
                  <div className="flex-shrink-0 w-24 font-bold" style={{ color: '#D27702' }}>
                    {segment.time}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-lg mb-1">{segment.title}</h4>
                    <p className="text-gray-600">{segment.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <strong className="block mb-2">Equipment Checklist:</strong>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div>✓ Projector & laptop</div>
                <div>✓ WW2 telephone artefact</div>
                <div>✓ Printed lesson plans</div>
                <div>✓ Sample digital story (loaded)</div>
                <div>✓ Evaluation forms</div>
                <div>✓ USB drives with toolkit files</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads & Resources */}
      {/* <section className="py-16 px-6 army-bg text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Downloads & Classroom Resources</h2>
          <p className="text-center text-xl mb-12 opacity-90">All materials ready to print and use</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'Complete Toolkit PDF', size: '8.5 MB', desc: 'Full guide with all lessons and resources' },
              { name: 'Artefact ID Worksheet', size: '2.1 MB', desc: 'Printable sheet for student exploration' },
              { name: 'Storyboard Template', size: '1.8 MB', desc: 'Blank 6-panel planning sheet' },
              { name: 'Teacher Slide Deck (PPTX)', size: '12.3 MB', desc: 'Editable PowerPoint presentation' },
              { name: 'Observation Worksheets', size: '3.2 MB', desc: 'Guided worksheets for all three lessons' },
              { name: 'Evaluation Feedback Form', size: '0.8 MB', desc: 'Help us improve this toolkit' }
            ].map((file, idx) => (
              <div key={idx} className="download-box cursor-pointer">
                <div>
                  <div className="font-bold text-lg">{file.name}</div>
                  <div className="text-sm opacity-80">{file.desc}</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm opacity-80">{file.size}</span>
                  <Download size={24} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm opacity-80">
              All files are formatted for UK A4 paper. PDF files require Adobe Reader (free download).
            </p>
          </div>
        </div>
      </section> */}

      {/* Partners Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-4">About Our Partners</h2>
          <p className="text-center text-lg text-gray-700 mb-12">
            This toolkit is a collaboration between three organizations passionate about education and heritage
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: '#607401', color: 'white' }}>
                🎓
              </div>
              <h3 className="text-xl font-bold mb-3">Teesside University</h3>
              <p className="text-gray-600 mb-4">
                Leading research and innovation in digital education and community engagement across the North East.
              </p>

              <a
                href="https://www.tees.ac.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2"
              >
                Visit Website →
              </a>
              <a
                href="https://www.google.com/maps/place/Teesside+University/@54.5706753,-1.2378422,17z/data=!3m1!4b1!4m6!3m5!1s0x487eed10770a3edd:0x28e227d64fd10a0c!8m2!3d54.5706753!4d-1.2352673!16zL20vMDM0NHM4?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2"
              >
                <MapPin size={16} />
                View on Map
              </a>
            </div>

            <div className="card text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: '#D27702', color: 'white' }}>
                🏛️
              </div>
              <h3 className="text-xl font-bold mb-3">Dorman Museum</h3>
              <p className="text-gray-600 mb-4">
                Middlesbrough's premier museum, showcasing local history, natural sciences, and community heritage.
              </p>
              <a
                href="https://teesvalleymuseums.org/visit/dorman-museum/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2"
              >
                Visit Website →
              </a>
              <a
                href="https://www.google.com/maps/place/Dorman+Museum/@54.5640305,-1.2437473,16z/data=!3m1!4b1!4m6!3m5!1s0x487eed1ecc02b24d:0x14ade59456098819!8m2!3d54.5645375!4d-1.2409363!16zL20vMGczbGZo?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2"
              >
                <MapPin size={16} />
                View on Map
              </a>
            </div>

            <div className="card text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: '#607401', color: 'white' }}>
                🏫
              </div>
              <h3 className="text-xl font-bold mb-3">Beech Grove Primary School</h3>
              <p className="text-gray-600 mb-4">
                An outstanding primary school committed to creative learning and community partnerships.
              </p>
              <a
                href="https://www.beechgroveschool.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2"
              >
                Visit Website →
              </a>
              <a
                href="https://www.google.com/maps/place/Beech+Grove+Primary+School/@54.5542192,-1.2296365,18.69z/data=!4m6!3m5!1s0x487eecfeb021e3d7:0x6df787db50517677!8m2!3d54.5545787!4d-1.2258901!16s%2Fg%2F1tmz6hqm?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2"
              >
                <MapPin size={16} />
                View on Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6" style={{ backgroundColor: '#2F2C02', color: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#FFE709' }}>Stories on the Line</h3>
              <p className="opacity-80 text-sm">
                A digital storytelling toolkit bringing WW2 history to life through museum objects and creative literacy.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="https://teesvalleymuseums.org/visit/dorman-museum/" target="_blank" rel="noopener noreferrer" className="block hover:text-yellow-400 transition-colors">
                  Dorman Museum
                </a>
                <a href="https://www.beechgroveschool.org.uk/" target="_blank" rel="noopener noreferrer" className="block hover:text-yellow-400 transition-colors">
                  Beech Grove Primary School
                </a>
                <a href="https://www.tees.ac.uk/" target="_blank" rel="noopener noreferrer" className="block hover:text-yellow-400 transition-colors">
                  Teesside University
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3">Contact & Support</h4>
              <p className="text-sm opacity-80 mb-2">
                For questions about this toolkit or to arrange a training session, please contact your school's history coordinator.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm opacity-80">
            <p className="mb-4">
              Built in collaboration with Teesside University, Middlesbrough Museums (Dorman Museum), and Beech Grove Primary School.
            </p>
            <p className="mb-4">
              © 2024 Teesside University. Educational use permitted. All artefact images courtesy of Dorman Museum.
            </p>
            <div className="text-xs opacity-60">
              <p className="mb-2">
                <strong>Image Credits & Sources:</strong>
              </p>
              <p>
                Hero images from Unsplash (Creative Commons). Historical artefact photographs: Dorman Museum Collection.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;