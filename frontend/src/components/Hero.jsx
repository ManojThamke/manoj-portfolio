import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';

// Advanced Animated Letters for main heading
const AnimatedText = ({ text }) => {
    const words = text.split(" ");
    return (
        <span className="inline-block">
            {words.map((word, i) => (
                <span key={i} className="inline-block whitespace-nowrap mr-4">
                    {word.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50, rotate: -15 },
                                visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", damping: 12, stiffness: 200 } }
                            }}
                            className="inline-block text-slate-900"
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </span>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const titleY = useTransform(scrollY, [0, 500], [0, 150]);
    const bgY = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityFade = useTransform(scrollY, [0, 300], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: { type: "spring", stiffness: 200, damping: 20 }
        }
    };

    return (
        <section className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden perspective-1000">

            {/* Advanced Floating Geometries Background */}
            <motion.div style={{ y: bgY }} className="absolute inset-x-0 inset-y-0 w-full h-full pointer-events-none z-0">
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 10, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[15%] w-64 h-64 bg-gradient-to-tr from-cyan-300/40 to-indigo-300/40 rounded-[40%] blur-3xl mix-blend-multiply"
                />
                <motion.div
                    animate={{
                        y: [0, 40, 0],
                        x: [0, -20, 0],
                        rotate: [0, -15, 0]
                    }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-gradient-to-bl from-purple-300/40 to-pink-300/40 rounded-full blur-3xl mix-blend-multiply"
                />

                {/* Floating Abstract Shapes */}
                <motion.div
                    animate={{ rotate: 360, y: [0, -50, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[30%] right-[25%] opacity-30"
                >
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-indigo-400" strokeWidth="2">
                        <polygon points="50 15, 100 100, 0 100" />
                    </svg>
                </motion.div>

                <motion.div
                    animate={{ rotate: -360, x: [0, 40, 0], y: [0, 30, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[35%] left-[20%] opacity-30"
                >
                    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-cyan-500" strokeWidth="3">
                        <circle cx="50" cy="50" r="40" />
                    </svg>
                </motion.div>
            </motion.div>

            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10 w-full">

                {/* Text Content Left */}
                <motion.div
                    style={{ y: titleY, opacity: opacityFade }}
                    className="flex-1 text-center lg:text-left space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center justify-center lg:justify-start space-x-2 px-6 py-2 rounded-full border border-cyan-300 bg-cyan-50 backdrop-blur-md shadow-sm transform-gpu mx-auto lg:mx-0">
                        <motion.span
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-cyan-500"
                        />
                        <span className="text-cyan-800 font-bold tracking-wide uppercase text-xs md:text-sm">
                            Available for Opportunities
                        </span>
                    </motion.div>

                    <motion.h1 className="text-6xl md:text-8xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none relative z-10">
                        <AnimatedText text="Hi, I'm" /> <br className="md:hidden" />
                        <motion.span
                            variants={itemVariants}
                            className="relative inline-block mt-2 md:mt-0"
                            whileHover={{ scale: 1.05, rotateZ: -2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            <span className="absolute -inset-4 bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 blur-2xl opacity-60 mix-blend-multiply animate-pulse"></span>
                            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 drop-shadow-sm">
                                Manoj.
                            </span>
                        </motion.span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                        Software Developer with hands-on experience in <span className="text-slate-900 font-bold">Full-Stack MERN</span> application development and <span className="text-slate-900 font-bold">AI-Powered Security Systems</span>.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-10">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px -10px rgba(6,182,212,0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 hover:from-cyan-600 to-indigo-500 hover:to-indigo-600 text-white font-bold text-lg shadow-xl shadow-cyan-500/20 transition-all w-full sm:w-auto relative overflow-hidden group text-center"
                        >
                            {/* Glossy overlay effect */}
                            <motion.div
                                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                                animate={{ x: ["-200%", "300%"] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                            />
                            <span className="relative z-10">View My Work</span>
                        </motion.a>

                        <div className="flex items-center space-x-6">
                            {[{ icon: FaGithub, href: "https://github.com/ManojThamke", color: "text-slate-800", hoverBg: "hover:bg-slate-100 group-hover:text-black", border: "hover:border-slate-300" },
                            { icon: FaLinkedin, href: "https://www.linkedin.com/in/manoj-thamke/", color: "text-blue-600", hoverBg: "hover:bg-blue-50 group-hover:text-blue-700", border: "hover:border-blue-300" },
                            { icon: FaEnvelope, href: "mailto:manojthamke28@gmail.com", color: "text-rose-500", hoverBg: "hover:bg-rose-50 group-hover:text-rose-600", border: "hover:border-rose-300" },
                            { icon: FaInstagram, href: "https://www.instagram.com/thamke_manoj_28?igsh=MWVrdDQydjE2MGk5eA==", color: "text-pink-600", hoverBg: "hover:bg-pink-50 group-hover:text-pink-700", border: "hover:border-pink-300" },
                            { icon: FaPhone, href: "tel:+919309164804", color: "text-emerald-500", hoverBg: "hover:bg-emerald-50 group-hover:text-emerald-600", border: "hover:border-emerald-300" }
                            ].map((Item, i) => (
                                <motion.a
                                    key={i}
                                    href={Item.href}
                                    whileHover={{ y: -8, scale: 1.15, rotate: [0, -10, 10, 0] }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className={`p-4 rounded-full bg-white border border-slate-200 shadow-md ${Item.border} ${Item.hoverBg} transition-all duration-300 group cursor-pointer relative overflow-hidden`}
                                >
                                    <motion.div className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Item.icon className={`text-2xl relative z-10 ${Item.color} transition-colors duration-300`} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Identity Image Right */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                    className="relative flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-xl mx-auto"
                >
                    {/* Decorative Background Blob */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 rounded-[40%] blur-3xl animate-pulse" />

                    {/* Main Image Container */}
                    <motion.div
                        whileHover={{ scale: 1.02, rotate: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="relative z-10 w-64 h-80 sm:w-80 sm:h-96 lg:w-[400px] lg:h-[480px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-slate-100 flexitems-center justify-center group"
                    >
                        {/* Fallback pattern while waiting for image */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />

                        <img
                            src="/Profile-manoj.jpg"
                            alt="Manoj Thamke"
                            className="w-full h-full object-cover object-top relative z-10 transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                                e.target.src = "https://ui-avatars.com/api/?name=Manoj+Thamke&background=e0f2fe&color=0369a1&size=512";
                            }}
                        />

                        {/* Inner shadow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-20 pointer-events-none" />
                    </motion.div>

                    {/* Floating Decorative Elements around image */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 -left-6 z-30 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 border border-slate-100"
                    >
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-bold text-slate-700 text-sm">Open to Work</span>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
