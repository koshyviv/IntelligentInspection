import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeProcessComponent = ({ process }) => {
  return (
    <Link to={`/process/${process.id}`}>
      <motion.div
        className="card w-64 min-w-64 mr-4 overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        {/* Video Player */}
        <div className="h-40 bg-gray-200 relative">
          {process.webrtcEndpoint ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={process.webrtcEndpoint} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
          
          {/* Status Indicator */}
          <div className="absolute top-2 right-2">
            <span className={`inline-block w-3 h-3 rounded-full ${process.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></span>
          </div>
        </div>
        
        {/* Process Details */}
        <div className="p-4">
          <h3 className="title text-lg mb-1 truncate">{process.locationName}</h3>
          <p className="subtitle text-sm text-gray-600 truncate">{process.deviceName}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default HomeProcessComponent; 