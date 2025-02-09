import React from 'react'
import { motion } from 'framer-motion'
const VideoSection = () => {
    return (
        <motion.section
            className="bg-gray-100 py-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl text-primary font-bold text-center mb-8">Watch Teghiya Travels in Action</h2>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        className="w-full h-full rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </motion.section>
    )
}

export default VideoSection