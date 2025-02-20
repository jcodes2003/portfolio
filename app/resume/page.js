'use client'
import React, { useState } from 'react'
import { FaDownload } from "react-icons/fa6";
import { RingLoader } from 'react-spinners';

const ResumePage = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-gray-100">
      {loading ? (
        <div className="loader"><RingLoader color="#00ffe5" /></div>
      ) : (
        <a
          href="/assets/images/resumes.pdf" // Update with the actual path to your resume
          className="flex items-center justify-center w-1/2 bg-green-600 py-3 rounded-lg font-medium hover:bg-green-500 transition-colors text-center"
          download
          onClick={handleDownload}
        >
          <span className="mr-2">
            <FaDownload />
          </span>
          Download Resume
        </a>
      )}
    </div>
  )
}

export default ResumePage
