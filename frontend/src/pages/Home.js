import React, { useState, useEffect } from 'react';
import HomeProcessComponent from '../components/HomeProcessComponent';
import InspectionSummary from '../components/InspectionSummary';
import axios from 'axios';

const Home = () => {
  const [processes, setProcesses] = useState([]);
  const [summaryData, setSummaryData] = useState({
    totalInspection: 0,
    passedInspection: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // For development purposes, use mock data directly
    setMockData();
    setLoading(false);
    
    // Commented out API fetch for now since backend is not running
    /*
    const fetchData = async () => {
      try {
        // Fetch process list
        const processResponse = await axios.get('/api/home/process-list');
        setProcesses(processResponse.data);
        
        // Fetch inspection summary
        const summaryResponse = await axios.get('/api/home/inspection-summary');
        setSummaryData(summaryResponse.data);
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try again later.');
        setLoading(false);
        
        // For demo purposes, set mock data if API fails
        setMockData();
      }
    };
    
    fetchData();
    */
  }, []);
  
  // Mock data for development/demo purposes
  const setMockData = () => {
    setProcesses([
      {
        id: 1,
        webrtcEndpoint: null,
        locationName: 'Factory Floor A',
        deviceName: 'Camera 1',
        status: 'online',
      },
      {
        id: 2,
        webrtcEndpoint: null,
        locationName: 'Assembly Line B',
        deviceName: 'Camera 2',
        status: 'online',
      },
      {
        id: 3,
        webrtcEndpoint: null,
        locationName: 'Packaging Area C',
        deviceName: 'Camera 3',
        status: 'offline',
      },
      {
        id: 4,
        webrtcEndpoint: null,
        locationName: 'Quality Control D',
        deviceName: 'Camera 4',
        status: 'online',
      },
    ]);
    
    setSummaryData({
      totalInspection: 100,
      passedInspection: 96,
    });
  };

  return (
    <div className="space-y-8">
      <h1 className="title text-2xl">Home</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      ) : (
        <>
          {/* Visual Inspection Process Details (60% width) */}
          <div className="w-full">
            <h2 className="title text-xl mb-4">Visual Inspection Process Details</h2>
            <div className="overflow-x-auto pb-4">
              <div className="flex">
                {processes.map((process) => (
                  <HomeProcessComponent key={process.id} process={process} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Inspection Summary (40% width) */}
          <div className="w-full">
            <InspectionSummary data={summaryData} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home; 