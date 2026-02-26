import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGraduationCap, FaBrain, FaLink, FaCode } from 'react-icons/fa';

// Advanced 3D Tilt Card Component
const TiltCard = ({ item, index }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current || window.innerWidth < 768) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.4 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`group relative flex flex-col items-center justify-center p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 transition-shadow duration-300 shadow-sm hover:shadow-2xl hover:bg-white ${item.border} ${item.glow}`}
        >
            {/* Glossy Reflection overlay mapped to mouse */}
            <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: useTransform(
                        () => `radial-gradient(circle at ${(x.get() + 0.5) * 100}% ${(y.get() + 0.5) * 100}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`
                    )
                }}
            />

            {/* Content moved 'forward' in 3D space */}
            <div style={{ transform: "translateZ(50px)" }} className="flex flex-col items-center">
                <div className={`text-4xl mb-4 ${item.color} drop-shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                </div>
                <span className="text-sm font-bold text-slate-700 tracking-wide text-center">{item.label}</span>
            </div>
        </motion.div>
    );
};

const About = () => {
    return (
        <section id="about" className="py-32 px-6 relative z-10 w-full overflow-hidden perspective-1000">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Header & Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div className="inline-block relative">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">
                                About Me
                            </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "50%" }}
                                transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                                className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full opacity-50"
                            />
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                                I'm an IT Engineering student at <span className="font-bold text-indigo-900 border-b-2 border-indigo-200">Alamuri Ratnamala Institute</span> with a deep passion for building scalable digital experiences. Whether it's crafting beautiful front-end interfaces or engineering robust backend architectures, I love transforming complex problems into elegant solutions.
                            </p>
                            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                                Currently working as a <span className="text-cyan-700 font-bold bg-cyan-100 px-2 py-0.5 rounded-lg border border-cyan-200">Web Development Intern</span>, building CRM-based applications with REST APIs, authentication mechanisms, and MongoDB integration. I recently built a hybrid ML-based Network Intrusion Detection System trained on 16M+ CICIDS2018 records using 9 supervised models with ensemble voting.
                            </p>
                        </div>
                    </motion.div>

                    {/* Cards / Grid - Fixed perspective container */}
                    <div className="w-full lg:w-1/2 relative" style={{ perspective: "1000px" }}>
                        {/* Ambient Background for grid */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-200/50 rounded-full blur-[80px] -z-10 mix-blend-multiply pointer-events-none"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {[
                                { icon: <FaBrain />, label: "Machine Learning", color: "text-rose-500", border: "hover:border-rose-300", glow: "hover:shadow-rose-500/20" },
                                { icon: <FaLink />, label: "Blockchain & Web3", color: "text-cyan-500", border: "hover:border-cyan-300", glow: "hover:shadow-cyan-500/20" },
                                { icon: <FaCode />, label: "Full Stack Development", color: "text-indigo-500", border: "hover:border-indigo-300", glow: "hover:shadow-indigo-500/20" },
                                { icon: <FaGraduationCap />, label: "Continuous Learning", color: "text-purple-500", border: "hover:border-purple-300", glow: "hover:shadow-purple-500/20" }
                            ].map((item, index) => (
                                <TiltCard key={index} item={item} index={index} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
