import React from 'react';
import { motion } from 'framer-motion';

const SensorList = ({ sensors }) => {
  return (
    <div className="card p-6">
      <h2 className="title text-xl mb-6">Sensor Status</h2>
      
      <div className="space-y-4">
        {sensors.map((sensor) => (
          <motion.div
            key={sensor.id}
            className="bg-gray-50 p-4 rounded-lg flex justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h3 className="subtitle text-lg">{sensor.name}</h3>
              <p className="text-sm text-gray-600">{sensor.description}</p>
            </div>
            
            <div className="flex items-center">
              <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                sensor.status === 'OK' ? 'bg-green-500' : 'bg-red-500'
              }`}></span>
              <span className={`font-medium ${
                sensor.status === 'OK' ? 'text-green-700' : 'text-red-700'
              }`}>
                {sensor.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SensorList; 