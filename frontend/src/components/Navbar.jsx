import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? 'py-4 backdrop-blur-md bg-white/70 border-b border-slate-200 shadow-xl shadow-slate-200/50'
                    : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-7xl">
                <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600"
                >
                    Manoj.
                </motion.a>

                <div className="hidden md:flex items-center space-x-1 hover:space-x-2 transition-all duration-300 bg-white border border-slate-200 shadow-sm px-6 py-2 rounded-full">
                    {['About', 'Projects', 'Resume'].map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-cyan-600 transition-colors relative group"
                        >
                            {item}
                            <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/70 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </motion.a>
                    ))}
                </div>

                <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm">
                    <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
