import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SensorList from '../components/SensorList';
import axios from 'axios';

const ProcessDetail = () => {
  const { id } = useParams();
  const [processData, setProcessData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // For development purposes, use mock data directly
    setMockData();
    setLoading(false);
    
    // Commented out API fetch for now since backend is not running
    /*
    const fetchProcessDetail = async () => {
      try {
        const response = await axios.get(`/api/process/detail/${id}`);
        setProcessData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching process detail:', err);
        setError('Failed to load process details. Please try again later.');
        setLoading(false);
        
        // For demo purposes, set mock data if API fails
        setMockData();
      }
    };
    
    fetchProcessDetail();
    */
  }, [id]);
  
  // Mock data for development/demo purposes
  const setMockData = () => {
    setProcessData({
      id: parseInt(id),
      locationName: 'Factory Floor A',
      deviceName: 'Camera 1',
      webrtcEndpoint: null,
      status: 'online',
      inspectionSummary: {
        totalInspection: 100,
        passedInspection: 96,
      },
      sensors: [
        {
          id: 1,
          name: 'Temperature Sensor',
          description: 'Monitors ambient temperature',
          status: 'OK',
        },
        {
          id: 2,
          name: 'Pressure Sensor',
          description: 'Monitors system pressure',
          status: 'OK',
        },
        {
          id: 3,
          name: 'Humidity Sensor',
          description: 'Monitors ambient humidity',
          status: 'Not OK',
        },
        {
          id: 4,
          name: 'Light Sensor',
          description: 'Monitors ambient light levels',
          status: 'OK',
        },
      ],
    });
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
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        {/* ProcessDetailMain (70%) */}
        <div className="w-full md:w-[70%]">
          <div className="card p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="title text-2xl">{processData.locationName}</h1>
                <p className="subtitle text-lg">{processData.deviceName}</p>
              </div>
              <div className="flex items-center">
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                  processData.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                }`}></span>
                <span className={`font-medium ${
                  processData.status === 'online' ? 'text-green-700' : 'text-red-700'
                }`}>
                  {processData.status === 'online' ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>
            
            {/* Video Stream */}
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              {processData.webrtcEndpoint ? (
                <video
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={processData.webrtcEndpoint} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="text-gray-500 flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mb-2"
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
                  <p>Video stream not available</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* ProcessDetailSub (30%) */}
        <div className="w-full md:w-[30%] space-y-6">
          {/* Inspection Summary */}
          <div className="card p-6">
            <h2 className="title text-xl mb-4">Inspection Summary</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="subtitle text-lg mb-2">Total Inspection Done Today</h3>
                <p className="text-3xl font-bold text-primary-700">
                  {processData.inspectionSummary.totalInspection}
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="subtitle text-lg mb-2">Passed Inspection</h3>
                <p className="text-3xl font-bold text-primary-700">
                  {processData.inspectionSummary.passedInspection}
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="subtitle text-lg mb-2">Failed Inspection</h3>
                <p className="text-3xl font-bold text-red-600">
                  {processData.inspectionSummary.totalInspection - 
                   processData.inspectionSummary.passedInspection}
                </p>
              </div>
            </div>
          </div>
          
          {/* Sensor List */}
          <SensorList sensors={processData.sensors} />
        </div>
      </div>
    </div>
  );
};

export default ProcessDetail; 