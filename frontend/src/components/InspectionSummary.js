import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const InspectionSummary = ({ data }) => {
  const { totalInspection, passedInspection } = data;
  const failedInspection = totalInspection - passedInspection;
  
  const pieData = [
    { name: 'Passed', value: passedInspection },
    { name: 'Failed', value: failedInspection },
  ];
  
  const COLORS = ['#6d28d9', '#ef4444'];
  
  return (
    <div className="card p-6">
      <h2 className="title text-xl mb-6">Inspection Summary</h2>
      
      <div className="flex flex-col md:flex-row">
        {/* Pie Chart */}
        <div className="w-full md:w-1/2 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Statistics */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 mt-4 md:mt-0 md:pl-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="subtitle text-lg mb-2">Total Inspection Done Today</h3>
            <p className="text-3xl font-bold text-primary-700">{totalInspection}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="subtitle text-lg mb-2">Passed Inspection</h3>
            <p className="text-3xl font-bold text-primary-700">{passedInspection}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="subtitle text-lg mb-2">Failed Inspection</h3>
            <p className="text-3xl font-bold text-red-600">{failedInspection}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspectionSummary; 