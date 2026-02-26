import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaRobot, FaBrain, FaCogs, FaProjectDiagram, FaFileAlt, FaTerminal, FaBug, FaCodeBranch } from 'react-icons/fa';

// Array of categorized skills
const skillCategories = [
    {
        title: "Core Technologies",
        description: "The MERN stack & foundational protocols I use to build scalable web applications.",
        color: "bg-cyan-50",
        borderColor: "border-cyan-200",
        textColor: "text-cyan-700",
        iconColor: "text-cyan-500",
        skills: [
            { name: "React / Vite", icon: FaReact },
            { name: "Node.js / Express", icon: FaNodeJs },
            { name: "MongoDB", icon: FaDatabase },
            { name: "Python", icon: FaPython }
        ]
    },
    {
        title: "AI & Prompt Engineering",
        description: "Leveraging LLMs, model tuning, and sophisticated prompt design for intelligent logic.",
        color: "bg-indigo-50",
        borderColor: "border-indigo-200",
        textColor: "text-indigo-700",
        iconColor: "text-indigo-500",
        skills: [
            { name: "Prompt Architecture", icon: FaBrain },
            { name: "Model Integration", icon: FaRobot },
            { name: "Feature Engineering", icon: FaCogs }
        ]
    },
    {
        title: "Architecture & DevOps",
        description: "Designing resilient systems, maintaining CI/CD, and writing crystal-clear technical docs.",
        color: "bg-rose-50",
        borderColor: "border-rose-200",
        textColor: "text-rose-700",
        iconColor: "text-rose-500",
        skills: [
            { name: "System Design", icon: FaProjectDiagram },
            { name: "Tech Documentation", icon: FaFileAlt },
            { name: "Version Control", icon: FaCodeBranch }
        ]
    },
    {
        title: "The \"Skill Vibe\"",
        description: "Algorithmic thinking, clean code principles, and relentless problem debugging.",
        color: "bg-purple-50",
        borderColor: "border-purple-200",
        textColor: "text-purple-700",
        iconColor: "text-purple-500",
        skills: [
            { name: "Algorithmic Logic", icon: FaBrain },
            { name: "Clean Architecture", icon: FaTerminal },
            { name: "Deep Debugging", icon: FaBug }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 md:py-32 px-6 relative z-10 w-full bg-white/40 border-y border-slate-200 backdrop-blur-3xl overflow-hidden">
            <div className="max-w-6xl mx-auto relative">

                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-bold text-sm tracking-widest uppercase mb-6 shadow-sm"
                    >
                        Arsenal & Mindset
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500"
                    >
                        Technical Proficiencies
                    </motion.h2>
                </div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 relative z-10"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className={`p-8 md:p-10 rounded-[2.5rem] border ${category.borderColor} bg-white shadow-xl shadow-slate-200/50 flex flex-col justify-between overflow-hidden relative group`}
                        >
                            {/* Decorative background circle on hover */}
                            <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl -z-0`} />

                            <div className="relative z-10">
                                <h3 className={`text-2xl font-black ${category.textColor} mb-3`}>
                                    {category.title}
                                </h3>
                                <p className="text-slate-500 font-medium leading-relaxed mb-8 h-auto md:h-16">
                                    {category.description}
                                </p>
                            </div>

                            {/* Sub-skills map */}
                            <div className="flex flex-wrap gap-3 relative z-10">
                                {category.skills.map((skill, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="flex items-center space-x-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full shadow-sm hover:shadow-md transition-shadow group/pill"
                                    >
                                        <skill.icon className={`text-lg ${category.iconColor} group-hover/pill:scale-110 transition-transform`} />
                                        <span className="text-sm font-bold text-slate-700">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Floating ambient artifacts */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100/30 rounded-full blur-[100px] pointer-events-none -z-0" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-[100px] pointer-events-none -z-0" />

            </div>
        </section>
    );
};

export default Skills;
