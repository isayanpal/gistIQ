import type React from "react"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FaFilePdf, FaCloudUploadAlt, FaDownload } from "react-icons/fa"
import { BsLightbulb } from "react-icons/bs"
import { Link } from "react-router-dom"
import demoVideo from "../assets/gist-video.mp4"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col items-center justify-center pt-20 pb-12">
            <motion.div
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ✨ Powered by Gemini AI 
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              AI-Powered PDF Summarizer
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mt-6 text-center max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Quickly upload your PDF files and get an AI-generated summary in seconds. Save time and stay productive
              with our intelligent document analysis.
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/summarize">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <span className="flex items-center gap-2">
                    Get Started <FaCloudUploadAlt className="text-xl" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Demo Section */}
      <motion.div
        className="container mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">See How It Works</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Watch our quick demo to see how easy it is to summarize your PDF documents in just a few clicks
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          {/* Video with autoplay and loop, no sound */}
          <div className="relative aspect-video bg-gradient-to-r from-blue-100 to-purple-100">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Caption */}
          <div className="bg-white p-6 border-t border-gray-100">
            <h3 className="font-medium text-lg text-gray-900">PDF Summarization Demo</h3>
            <p className="text-gray-600 text-sm mt-1">
              Learn how to upload your documents and get instant AI-generated summaries
            </p>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Our AI-powered tool makes document summarization faster and more efficient than ever
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FeatureCard
            icon={<FaFilePdf className="text-red-500 text-4xl" />}
            title="Upload PDFs"
            description="Easily upload your PDF documents of any size for quick processing and analysis."
            color="bg-red-50"
          />
          <FeatureCard
            icon={<BsLightbulb className="text-amber-500 text-4xl" />}
            title="AI-Powered Summarization"
            description="Our advanced AI extracts key insights and creates concise summaries from your documents."
            color="bg-amber-50"
          />
          <FeatureCard
            icon={<FaDownload className="text-emerald-500 text-4xl" />}
            title="Download Summaries"
            description="Get your summarized content as a downloadable PDF or copy text directly to your clipboard."
            color="bg-emerald-50"
          />
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-center text-white shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -5 }}
        >
          <h2 className="text-3xl font-bold">Ready to save time on document review?</h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Join thousands of professionals who use our AI summarizer to extract key information from PDFs quickly and
            efficiently.
          </p>
          <div className="mt-8">
            <Link to="/summarize">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl text-lg font-medium shadow-lg transition-all duration-300">
                Try It Now — It's Free
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}) {
  return (
    <motion.div
      className={`p-8 bg-white shadow-lg rounded-xl text-center cursor-default border border-gray-100 hover:border-gray-200 transition-all duration-300`}
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full ${color}`}>{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-3 leading-relaxed">{description}</p>
    </motion.div>
  )
}

