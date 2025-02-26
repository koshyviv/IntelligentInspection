import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const Analytics = () => {
  const [devices, setDevices] = useState([]);
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        // In a real application, these would be separate API calls
        // For demo purposes, we're using mock data
        setMockData();
        setLoading(false);
      } catch (err) {
        console.error('Error fetching analytics data:', err);
        setError('Failed to load analytics data. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchAnalyticsData();
  }, []);
  
  // Mock data for development/demo purposes
  const setMockData = () => {
    // Mock devices
    setDevices([
      { id: 1, name: 'Camera 1', location: 'Factory Floor A' },
      { id: 2, name: 'Camera 2', location: 'Assembly Line B' },
      { id: 3, name: 'Camera 3', location: 'Packaging Area C' },
      { id: 4, name: 'Camera 4', location: 'Quality Control D' },
    ]);
    
    // Mock sensor data (24-hour period)
    const mockSensorData = [];
    for (let hour = 0; hour < 24; hour++) {
      mockSensorData.push({
        time: `${hour}:00`,
        sensor1: Math.floor(Math.random() * 20) + 80, // 80-100% range
        sensor2: Math.floor(Math.random() * 30) + 70, // 70-100% range
        sensor3: Math.floor(Math.random() * 40) + 60, // 60-100% range
        sensor4: Math.floor(Math.random() * 50) + 50, // 50-100% range
      });
    }
    setSensorData(mockSensorData);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="title text-2xl">Analytics</h1>
      
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Device List (60% on large screens) */}
        <div className="w-full lg:w-[60%]">
          <div className="card p-6">
            <h2 className="title text-xl mb-6">Device List</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {devices.map((device) => (
                    <tr key={device.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {device.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {device.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {device.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Sensor Line Status (40% on large screens) */}
        <div className="w-full lg:w-[40%]">
          <div className="card p-6">
            <h2 className="title text-xl mb-6">Sensor Line Status (24h)</h2>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={sensorData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sensor1" stroke="#8884d8" activeDot={{ r: 8 }} name="Sensor 1" />
                  <Line type="monotone" dataKey="sensor2" stroke="#82ca9d" name="Sensor 2" />
                  <Line type="monotone" dataKey="sensor3" stroke="#ffc658" name="Sensor 3" />
                  <Line type="monotone" dataKey="sensor4" stroke="#ff8042" name="Sensor 4" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 