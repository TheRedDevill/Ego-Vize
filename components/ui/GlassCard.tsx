import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", onClick, hoverEffect = false }) => {
    return (
        <motion.div 
            whileHover={hoverEffect ? { y: -10, boxShadow: "0 25px 50px -12px rgba(14, 165, 233, 0.25)" } : {}}
            transition={{ duration: 0.3 }}
            onClick={onClick}
            className={`
                relative overflow-hidden
                bg-white/70 backdrop-blur-xl 
                border border-white/40 
                shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                rounded-[2rem] 
                ${onClick ? 'cursor-pointer' : ''}
                ${className}
            `}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default GlassCard;