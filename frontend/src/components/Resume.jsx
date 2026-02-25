import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import resumeFile from '../assets/ManojThamke_Resume.pdf';

const timelineData = [
    {
        id: "01",
        category: "Experience",
        icon: <FaBriefcase />,
        theme: {
            dot: "#6366f1", // indigo-500
            shadow: "rgba(99, 102, 241, 0.6)",
            iconBg: "bg-indigo-50",
            iconText: "text-indigo-600",
            iconBorder: "border-indigo-100",
            pillBg: "bg-indigo-50/80",
            pillText: "text-indigo-600",
            watermark: "text-indigo-900"
        },
        title: "Web Development Intern",
        subtitle: "CURRENT ROLE • PRESENT",
        description: "Developing CRM-based applications utilizing REST APIs, secure authentication mechanisms, and robust MongoDB integrations for real-world business scenarios.",
        alignment: "right"
    },
    {
        id: "02",
        category: "Experience",
        icon: <FaBriefcase />,
        theme: {
            dot: "#6366f1",
            shadow: "rgba(99, 102, 241, 0.6)",
            iconBg: "bg-indigo-50",
            iconText: "text-indigo-600",
            iconBorder: "border-indigo-100",
            pillBg: "bg-slate-50",
            pillText: "text-slate-500",
            watermark: "text-indigo-900"
        },
        title: "Software Developer",
        subtitle: "FREELANCE / PROJECTS • 2022 - PRESENT",
        description: "Developed a Hybrid Machine Learning-Based Network Intrusion Detection System (ML-NIDS) using CICIDS2018 dataset. Implemented supervised ML models with a real-time MongoDB-backed MERN dashboard.",
        alignment: "left"
    },
    {
        id: "03",
        category: "Education",
        icon: <FaGraduationCap />,
        theme: {
            dot: "#06b6d4", // cyan-500
            shadow: "rgba(6, 182, 212, 0.6)",
            iconBg: "bg-cyan-50",
            iconText: "text-cyan-600",
            iconBorder: "border-cyan-100",
            pillBg: "bg-cyan-50/80",
            pillText: "text-cyan-700",
            watermark: "text-cyan-900"
        },
        title: "Bachelors of Engineering in IT",
        subtitle: "Alamuri Ratnamala Institute • July 2023 - Present",
        description: "CGPA: 7.85",
        alignment: "right"
    },
    {
        id: "04",
        category: "Education",
        icon: <FaGraduationCap />,
        theme: {
            dot: "#06b6d4",
            shadow: "rgba(6, 182, 212, 0.6)",
            iconBg: "bg-cyan-50",
            iconText: "text-cyan-600",
            iconBorder: "border-cyan-100",
            pillBg: "bg-slate-50",
            pillText: "text-slate-500",
            watermark: "text-cyan-900"
        },
        title: "Diploma in Information Technology",
        subtitle: "Vidyalankar Polytechnic • Dec 2020 - May 2023",
        description: "Percentage: 75.38%",
        alignment: "left"
    },
    {
        id: "05",
        category: "Education",
        icon: <FaGraduationCap />,
        theme: {
            dot: "#06b6d4",
            shadow: "rgba(6, 182, 212, 0.6)",
            iconBg: "bg-cyan-50",
            iconText: "text-cyan-600",
            iconBorder: "border-cyan-100",
            pillBg: "bg-slate-50",
            pillText: "text-slate-500",
            watermark: "text-cyan-900"
        },
        title: "Secondary School Certificate (X)",
        subtitle: "Saralgaon Vibhag High School • May 2020",
        description: "Percentage: 77.40%",
        alignment: "right"
    },
    {
        id: "06",
        category: "Certifications",
        icon: <FaCertificate />,
        theme: {
            dot: "#ec4899", // pink-500
            shadow: "rgba(236, 72, 153, 0.6)",
            iconBg: "bg-pink-50",
            iconText: "text-pink-600",
            iconBorder: "border-pink-100",
            pillBg: "bg-pink-50/80",
            pillText: "text-pink-600",
            watermark: "text-pink-900"
        },
        title: "JavaScript",
        subtitle: "Skillected Academy • Nov 2025",
        description: "Credential ID: 1928JASC | 1 Month",
        alignment: "left"
    },
    {
        id: "07",
        category: "Certifications",
        icon: <FaCertificate />,
        theme: {
            dot: "#ec4899",
            shadow: "rgba(236, 72, 153, 0.6)",
            iconBg: "bg-pink-50",
            iconText: "text-pink-600",
            iconBorder: "border-pink-100",
            pillBg: "bg-pink-50/80",
            pillText: "text-pink-600",
            watermark: "text-pink-900"
        },
        title: "Node.js & MongoDB",
        subtitle: "Skillected Academy • Nov 2025",
        description: "Credential ID: 2923NJMD | 2 Months",
        alignment: "right"
    },
    {
        id: "08",
        category: "Certifications",
        icon: <FaCertificate />,
        theme: {
            dot: "#ec4899",
            shadow: "rgba(236, 72, 153, 0.6)",
            iconBg: "bg-pink-50",
            iconText: "text-pink-600",
            iconBorder: "border-pink-100",
            pillBg: "bg-slate-50",
            pillText: "text-slate-500",
            watermark: "text-pink-900"
        },
        title: "HTML & CSS",
        subtitle: "Skillected Academy • Nov 2025",
        description: "Credential ID: 8627HTML | 1 Month",
        alignment: "left"
    }
];

const ResumeItem = ({ item }) => {
    const isRight = item.alignment === 'right';

    return (
        <div className={`flex flex-col md:flex-row ${isRight ? 'justify-end' : 'justify-start'} w-full mb-12 relative`}>

            {/* Timeline Node */}
            <motion.div
                initial={{ backgroundColor: "#e2e8f0", scale: 0.8 }}
                whileInView={{ backgroundColor: item.theme.dot, scale: 1, boxShadow: `0 0 0 6px white, 0 0 20px 4px ${item.theme.shadow}` }}
                viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
                transition={{ duration: 0.4 }}
                className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-10 w-4 h-4 rounded-full shadow-[0_0_0_6px_white] z-20"
            />

            <div className={`w-full md:w-1/2 ${isRight ? 'pl-12 md:pl-16' : 'pl-12 md:pl-0 md:pr-16'} relative`}>
                <motion.div
                    initial={{ opacity: 0, x: isRight ? 50 : -50, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm relative z-10 hover:shadow-xl transition-shadow duration-500 group/card overflow-hidden"
                >
                    {/* Background Watermark Number */}
                    <div className={`absolute top-0 right-0 p-6 opacity-[0.03] font-black text-8xl pointer-events-none transform ${isRight ? 'translate-x-4 -translate-y-4 md:left-auto md:right-0' : 'translate-x-4 -translate-y-4 md:left-0 md:right-auto md:-translate-x-4'} group-hover/card:scale-110 group-hover/card:${item.theme.watermark} transition-all duration-700`}>
                        {item.id}
                    </div>

                    {/* Card Header */}
                    <div className={`flex items-center ${isRight ? 'space-x-4' : 'md:flex-row-reverse md:space-x-reverse space-x-4'} mb-4`}>
                        <div className={`p-3 ${item.theme.iconBg} ${item.theme.iconText} rounded-xl border ${item.theme.iconBorder}`}>
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-black text-indigo-950 tracking-tight">{item.category}</h3>
                    </div>

                    {/* Card Content */}
                    <div className={isRight ? 'text-left' : 'md:text-right text-left'}>
                        <h4 className="text-xl font-bold text-slate-800 mb-1">{item.title}</h4>
                        <span className={`inline-block px-3 py-1 ${item.theme.pillBg} ${item.theme.pillText} text-[10px] font-bold uppercase tracking-widest rounded-lg mb-4 ${item.theme.pillBg === 'bg-slate-50' ? 'border border-slate-200' : ''}`}>
                            {item.subtitle}
                        </span>
                        {item.description && (
                            <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                                {item.description}
                            </p>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const Resume = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 40 });

    return (
        <section id="resume" ref={containerRef} className="py-32 px-6 relative z-10 bg-slate-50 overflow-hidden">
            <div className="max-w-6xl mx-auto relative">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50, filter: "blur(5px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        <div className="inline-block relative">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                Resume
                            </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-50"
                            />
                        </div>
                        <p className="mt-6 text-xl text-slate-600 font-medium">A brief summary of my professional journey.</p>
                    </motion.div>

                    <motion.a
                        href="/ManojThamke_Resume.pdf"
                        download="ManojThamke_Resume.pdf"
                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px -10px rgba(79,70,229,0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white rounded-2xl font-bold shadow-xl transition-all group"
                    >
                        <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                            <FaDownload className="text-xl text-indigo-300 group-hover:text-white transition-colors" />
                        </motion.div>
                        <span>Download Resume</span>
                    </motion.a>
                </div>

                {/* Central Timeline Container */}
                <div className="relative">

                    {/* Desktop Central Line - Hidden on Mobile */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 pointer-events-none z-0 hidden md:block">
                        <svg className="w-full h-full" viewBox="0 0 10 100" preserveAspectRatio="none">
                            <line x1="5" y1="0" x2="5" y2="100" stroke="#f1f5f9" strokeWidth="4" strokeLinecap="round" />
                            <motion.line
                                x1="5" y1="0" x2="5" y2="100"
                                stroke="url(#resumeGradient)" strokeWidth="4" strokeLinecap="round"
                                style={{ pathLength }}
                            />
                            <defs>
                                <linearGradient id="resumeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#818cf8" />
                                    <stop offset="50%" stopColor="#22d3ee" />
                                    <stop offset="100%" stopColor="#f472b6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Mobile Left Line */}
                    <div className="absolute left-[20px] top-4 bottom-4 w-1 pointer-events-none z-0 md:hidden">
                        <svg className="w-full h-full" viewBox="0 0 10 100" preserveAspectRatio="none">
                            <line x1="5" y1="0" x2="5" y2="100" stroke="#f1f5f9" strokeWidth="4" strokeLinecap="round" />
                            <motion.line
                                x1="5" y1="0" x2="5" y2="100"
                                stroke="url(#resumeGradient)" strokeWidth="4" strokeLinecap="round"
                                style={{ pathLength }}
                            />
                        </svg>
                    </div>

                    {/* Rendering the array of timeline entries */}
                    {timelineData.map((item) => (
                        <ResumeItem key={item.id} item={item} />
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Resume;
