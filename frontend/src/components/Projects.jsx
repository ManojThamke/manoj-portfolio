import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
    {
        title: "ML-NIDS – Hybrid Machine Learning-Based Network Intrusion Detection System",
        techStack: "Python, Scikit-learn, Scapy, MERN Stack",
        shortDescription: "A full-stack cybersecurity system designed to detect malicious network traffic in real time using 9 supervised machine learning models and ensemble learning techniques (Voting & Stacked) on 16M+ records.",
        fullDescription: `
## 📌 Project Overview
ML-NIDS V3 is an advanced real-time hybrid intrusion detection system designed to detect malicious network traffic using supervised machine learning and ensemble learning techniques.

The system captures live network packets, performs flow-based feature extraction, applies 9 optimized machine learning models combined with voting and stacked ensemble mechanisms, and visualizes detection results through a real-time MERN dashboard.

The architecture is designed to balance detection accuracy, speed, and reduced false positives, simulating enterprise-level intrusion detection systems.

---

📊 Dataset Used

🔹 CICIDS2018 Dataset
* Large-scale real-world intrusion dataset
* Includes attack categories: DDoS, DoS, Brute Force, Botnet, Web Attacks
* **16+ Million rows processed**
* Binary classification: 0 → BENIGN, 1 → ATTACK

---

## 🧠 Machine Learning Stack
* **Programming Language:** Python 3.10+
* **Libraries:** pandas, numpy, scikit-learn, XGBoost, LightGBM, CatBoost, joblib, matplotlib, seaborn, Scapy (real-time sniffing), requests (API bridge)

---

## 🤖 Implemented Machine Learning Models (9 Models)
**Classic Models:**
1. Logistic Regression
2. Decision Tree
3. Random Forest
4. K-Nearest Neighbors (KNN)
5. Naïve Bayes

**Advanced Models:**
6. Gradient Boosting (GBM)
7. XGBoost
8. LightGBM
9. CatBoost

*(Note: SVM excluded due to scalability and real-time latency constraints.)*

---

## 🔍 Advanced Real-Time Feature Engineering
**Custom flow-based tracking engine:** Per-flow aggregation, Flow duration computation, Forward packet statistics, Packet length standard deviation, Inter-arrival time (IAT) metrics, Time-based statistical modeling.

**Selected real-time compatible features:** Destination Port, Flow Duration, Fwd Packet Length Min, Packet Length Std, Flow IAT Mean, Fwd IAT Mean.

---

## 🗳️ Hybrid Engine – Voting-Based Ensemble (Level 1)
* **Hard Voting:** Majority decision across selected top models.
* **Soft Voting (Probability-Based):** Average probability across models. Configurable tuning range (0.5 – 0.9).

---

## 🧠 Stacked Ensemble Model (Level 2 Hybrid)
* **Base Models:** Random Forest, XGBoost, LightGBM, CatBoost
* **Meta Model:** Logistic Regression
* **Benefits:** Improved recall, Reduced false positives, Higher overall stability.

---

## ⚡ Two-Stage Hybrid Detection Pipeline
* **Stage 1 – Lightweight Screening:** Logistic Regression / Naïve Bayes quickly filters obvious benign traffic.
* **Stage 2 – Deep Ensemble Analysis:** Suspicious traffic forwarded to Voting Ensemble OR Stacked Ensemble.
* **Balances:** Speed, Accuracy, Scalability, False positive reduction.

---

## 🌐 Real-Time Detection Engine
Live packet capture using Scapy, TCP/UDP/IP traffic monitoring, Threshold tuning system, Attack simulation (UDP flood testing), Detection latency measurement.

---

## 🗄️ Backend (MERN Stack)
* **Technologies:** Node.js, Express.js, MongoDB, Mongoose
* **API Endpoints:** POST /api/detections, GET /api/detections, GET /api/stats

---

## 💻 Frontend Dashboard
* **Technologies:** React.js, Tailwind CSS, Axios, Recharts
* **Features:** Live attack feed, Attack vs Benign visualization, Time-series analytics, Per-model performance view, Dark mode, CSV export.

---

## 🏗️ Complete Architecture
Scapy Packet Capture ➔ Flow-Based Feature Extraction ➔ Lightweight Model (Stage 1) ➔ Voting & Stacked Ensemble (Stage 2) ➔ Threshold Engine ➔ Express API ➔ MongoDB ➔ React Dashboard.
        `,
        highlights: ["9 ML models", "16M+ Records", "Level 1 & Level 2 Ensemble", "Two-Stage Hybrid", "Scapy Sniffing", "MERN Dashboard"],
        color: "from-blue-500 to-indigo-600",
        shadow: "shadow-blue-500/10",
        badge: "Machine Learning & Security",
        pattern: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 60%), linear-gradient(120deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)",
        github: "#",
        demo: "#"
    },
    {
        title: "NotesChain – Decentralized Academic Social Network",
        techStack: "Solidity, Smart Contracts, Web3.js, IPFS, React.js",
        shortDescription: "A decentralized Web3 application designed to revolutionize academic note-sharing using smart contracts and IPFS.",
        fullDescription: "Built a decentralized Web3 application designed to revolutionize academic note-sharing by eliminating centralized control.\n\nImplemented smart contracts for autonomous content ownership, token-based incentives, and transparent interactions.\n\nIntegrated IPFS for decentralized file storage and Web3 for blockchain interaction, creating a gamified academic ecosystem powered by smart contracts.",
        highlights: ["Smart contract-based logic", "Decentralized storage using IPFS", "Tokenized incentive model", "Web3 wallet integration", "Fully decentralized architecture"],
        color: "from-purple-500 to-pink-600",
        shadow: "shadow-purple-500/10",
        badge: "Blockchain",
        pattern: "linear-gradient(45deg, rgba(168, 85, 247, 0.05) 25%, transparent 25%, transparent 75%, rgba(168, 85, 247, 0.05) 75%, rgba(168, 85, 247, 0.05)), linear-gradient(45deg, rgba(168, 85, 247, 0.05) 25%, transparent 25%, transparent 75%, rgba(168, 85, 247, 0.05) 75%, rgba(168, 85, 247, 0.05))",
        github: "#",
        demo: "#"
    },
    {
        title: "Bug Tracker / Issue Tracking System",
        techStack: "MongoDB, Express.js, React.js, Node.js",
        shortDescription: "A full-stack issue tracking system similar to Jira with role-based access control and ticket workflow management.",
        fullDescription: "Developed a full-stack issue tracking system similar to Jira that allows users to create, assign, and track issues within projects.\n\nImplemented authentication, role-based access control, ticket workflow management, and responsive UI design.",
        highlights: ["RESTful API integration", "JWT authentication", "Project & issue management", "Clean dashboard interface"],
        color: "from-emerald-500 to-teal-600",
        shadow: "shadow-emerald-500/10",
        badge: "Full Stack",
        pattern: "repeating-linear-gradient(45deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.05) 10px, transparent 10px, transparent 20px)",
        github: "#",
        demo: "#"
    },
    {
        title: "Airbnb Clone – Challenge Project",
        techStack: "Node.js, Express.js, EJS, MongoDB",
        shortDescription: "A functional Airbnb-style web application featuring listing creation, user authentication, and server-side rendering.",
        fullDescription: "Built a functional Airbnb-style web application as a backend-focused challenge project using Node.js and EJS templating.\n\nImplemented listing creation, editing, deletion, user authentication, and dynamic rendering of property data using server-side rendering.",
        highlights: ["Server-side rendering using EJS", "CRUD operations", "Authentication & session management", "RESTful routing structure", "MongoDB data modeling"],
        color: "from-orange-500 to-red-600",
        shadow: "shadow-orange-500/10",
        badge: "Backend Focus",
        pattern: "radial-gradient(circle, rgba(249, 115, 22, 0.05) 2px, transparent 2px)",
        github: "#",
        demo: "#"
    }
];

// Reusable 3D Tilt Card for Projects
const ProjectCard = ({ project, index, onClick }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1, type: "spring", bounce: 0.3 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`group flex flex-col h-full bg-white border border-slate-200 rounded-[2.5rem] relative overflow-hidden transition-shadow duration-500 shadow-xl hover:shadow-2xl ${project.shadow}`}
        >
            {/* Dynamic Glossy Light Effect */}
            <motion.div
                className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                style={{
                    background: useTransform(
                        () => `radial-gradient(1000px circle at ${(x.get() + 0.5) * 100}% ${(y.get() + 0.5) * 100}%, rgba(255,255,255,0.8), transparent 40%)`
                    )
                }}
            />

            {/* Visual Thumbnail Area */}
            <div className="h-48 md:h-56 w-full relative overflow-hidden border-b border-slate-100 shrink-0">
                <div className="absolute inset-0 bg-slate-50 transition-transform duration-700 group-hover:scale-105" style={{ background: project.pattern, backgroundSize: '20px 20px' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />

                <div style={{ transform: "translateZ(30px)" }} className="absolute bottom-6 left-8 right-8 flex justify-between items-end z-10">
                    <span className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-black tracking-widest uppercase bg-gradient-to-r ${project.color} text-white shadow-xl shadow-${project.color.split('-')[1]}-500/20`}>
                        {project.badge}
                    </span>
                    <span className="text-5xl font-black text-slate-200 font-mono leading-none select-none tracking-tighter mix-blend-multiply drop-shadow-sm">
                        0{index + 1}
                    </span>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-10 flex flex-col flex-grow relative z-10">


                <h3 style={{ transform: "translateZ(40px)" }} className="text-2xl md:text-3xl font-black mb-4 text-slate-800 relative z-10 line-clamp-2">
                    {project.title}
                </h3>

                <div style={{ transform: "translateZ(20px)" }} className="flex flex-wrap mb-6 relative z-10">
                    <p className="text-sm font-bold tracking-wide text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-100 font-mono">
                        {project.techStack}
                    </p>
                </div>

                <div style={{ transform: "translateZ(10px)" }} className="space-y-4 mb-10 flex-grow relative z-10">
                    <p className="text-slate-600 text-[15px] md:text-base leading-relaxed font-medium">
                        {project.shortDescription}
                    </p>
                </div>

                <div style={{ transform: "translateZ(50px)" }} className="mt-auto pt-6 border-t border-slate-100 relative z-10 flex gap-3 items-center w-full">
                    <button
                        onClick={() => onClick(project)}
                        className="flex-grow px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-transform hover:scale-[1.02] shadow-md relative overflow-hidden group/btn"
                    >
                        <span className="relative z-10 flex justify-center items-center gap-2">Explore Details <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span></span>
                    </button>
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-all shadow-sm hover:scale-105" title="View Source">
                            <FaGithub className="text-lg" />
                        </a>
                    )}
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-all shadow-sm hover:scale-105" title="Live Demo">
                            <FaExternalLinkAlt className="text-lg" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};


const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedProject(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section id="projects" ref={containerRef} className="py-32 px-6 relative z-10 bg-slate-50/50 perspective-1000">
            {/* SVG Scroll Drawing Progress Line in the background */}
            <div className="absolute left-[5%] md:left-[10%] top-0 bottom-0 w-1 pointer-events-none hidden lg:block opacity-30">
                <svg className="w-full h-full" viewBox="0 0 10 100" preserveAspectRatio="none">
                    <motion.line
                        x1="5" y1="0" x2="5" y2="100"
                        stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round"
                        style={{ pathLength }}
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="50%" stopColor="#4f46e5" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-20 text-center lg:text-left lg:ml-[10%]"
                >
                    <div className="inline-block relative">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">
                            Featured Projects
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full opacity-50"
                        />
                    </div>
                    <p className="mt-6 text-xl text-slate-600 max-w-2xl font-medium">A showcase of complex, end-to-end architectures I've designed and developed.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 lg:ml-[10%] perspectvive-1000">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} onClick={setSelectedProject} />
                    ))}
                </div>
            </div>

            {/* Fancy Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xl"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 30 }}
                            transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white/95 backdrop-blur-3xl w-full max-w-7xl max-h-[95vh] h-[90vh] rounded-[2.5rem] shadow-[0_0_80px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col md:flex-row border border-white"
                        >
                            {/* Left Sticky Sidebar (Visual & Summary) */}
                            <div className={`md:w-2/5 p-8 md:p-12 bg-gradient-to-br ${selectedProject.color} text-white flex flex-col relative overflow-y-auto shrink-0`} style={{ scrollbarWidth: 'none' }}>
                                {/* Animated Ambient Backgrounds */}
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none"></div>
                                <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-[80px] pointer-events-none"></motion.div>
                                <motion.div animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -bottom-32 -right-32 w-96 h-96 bg-black/20 rounded-full blur-[80px] pointer-events-none"></motion.div>

                                <div className="relative z-10 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-8">
                                        <span className="px-5 py-2 rounded-full bg-white/20 text-xs font-black uppercase tracking-widest backdrop-blur-md border border-white/30 shadow-xl">
                                            {selectedProject.badge}
                                        </span>
                                        {/* Mobile Close Button */}
                                        <button onClick={() => setSelectedProject(null)} className="md:hidden p-3 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors backdrop-blur-md border border-white/10">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </div>

                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-xl mb-6 tracking-tight">
                                        {selectedProject.title}
                                    </h3>

                                    <p className="font-mono text-white/90 text-sm md:text-base drop-shadow-md leading-relaxed mb-auto border-l-4 border-cyan-300 pl-5 py-1">
                                        {selectedProject.techStack}
                                    </p>

                                    <div className="mt-10 hidden md:flex flex-col flex-grow justify-end">
                                        <div className="mb-10">
                                            <h4 className="text-white/60 text-xs font-black uppercase tracking-widest mb-4">Key Capabilities</h4>
                                            <div className="flex flex-col gap-3">
                                                {selectedProject.highlights.map((highlight, i) => (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                                                        key={i} className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 border border-white/20 backdrop-blur-md shadow-lg"
                                                    >
                                                        <div className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.8)] animate-pulse"></div>
                                                        <span className="text-sm font-bold tracking-wide">{highlight}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Project Links / Action Buttons */}
                                        <div className="flex gap-4">
                                            {selectedProject.github && (
                                                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-white text-slate-900 font-bold hover:scale-105 transition-transform shadow-xl">
                                                    <FaGithub className="text-xl" /> Code
                                                </a>
                                            )}
                                            {selectedProject.demo && (
                                                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-black/20 border border-white/20 text-white font-bold hover:bg-black/40 hover:scale-105 transition-all shadow-xl backdrop-blur-md">
                                                    <FaExternalLinkAlt className="text-lg" /> Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Scrollable Content area */}
                            <div className="p-8 md:p-14 overflow-y-auto relative w-full md:w-3/5 bg-white" style={{ scrollbarWidth: 'thin' }}>
                                {/* Desktop Close Button */}
                                <button onClick={() => setSelectedProject(null)} className="hidden md:flex absolute top-8 right-8 p-3 w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors items-center justify-center border border-slate-200 shadow-sm z-50">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>

                                <div className="prose prose-slate max-w-none prose-headings:font-black prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-transparent prose-h2:bg-clip-text prose-h2:bg-gradient-to-r prose-h2:from-slate-800 prose-h2:to-slate-500 prose-p:text-slate-600 prose-p:leading-loose prose-p:text-lg md:prose-p:text-xl prose-li:text-slate-600 prose-li:text-lg md:prose-li:text-xl prose-strong:text-slate-900 prose-hr:border-slate-100 prose-hr:my-10">
                                    {selectedProject.fullDescription.split('\n').map((line, i) => {
                                        if (line.startsWith('## ')) return <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={i}>{line.replace('## ', '')}</motion.h2>;
                                        if (line.startsWith('# ')) return <motion.h1 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={i} className="text-4xl font-black text-slate-900 mb-8">{line.replace('# ', '')}</motion.h1>;
                                        if (line.startsWith('---')) return <hr key={i} className="my-10 border-t-2 border-slate-100" />;
                                        if (line.startsWith('* **')) {
                                            const parts = line.split('**');
                                            if (parts.length >= 3) {
                                                return <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} key={i} className="mb-3 list-disc ml-6 marker:text-cyan-500"><strong>{parts[1]}</strong>{parts.slice(2).join('**')}</motion.li>;
                                            }
                                        }
                                        if (line.startsWith('* ')) return <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} key={i} className="mb-3 list-disc ml-6 marker:text-cyan-500">{line.replace('* ', '')}</motion.li>;
                                        if (line.trim() === '') return <div key={i} className="h-4"></div>;

                                        if (line.includes('**')) {
                                            const parts = line.split('**');
                                            return <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={i} className="mb-6">
                                                {parts.map((part, index) => index % 2 === 1 ? <strong key={index} className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-800">{part}</strong> : part)}
                                            </motion.p>
                                        }

                                        return <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={i} className="mb-6">{line}</motion.p>;
                                    })}
                                </div>

                                {/* Mobile Highlights Footer (Hidden on Desktop) */}
                                <div className="mt-12 pt-8 border-t border-slate-200 md:hidden">
                                    <div className="flex gap-4 mb-8">
                                        {selectedProject.github && (
                                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-slate-900 text-white font-bold transition-transform shadow-md">
                                                <FaGithub className="text-xl" /> Code
                                            </a>
                                        )}
                                        {selectedProject.demo && (
                                            <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold transition-all shadow-sm">
                                                <FaExternalLinkAlt className="text-lg" /> Live Demo
                                            </a>
                                        )}
                                    </div>

                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Key Highlights</h4>
                                    <div className="flex flex-col gap-3">
                                        {selectedProject.highlights.map((highlight, i) => (
                                            <div key={i} className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-700 shadow-sm flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                                {highlight}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default Projects;
