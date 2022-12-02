import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [chart, setChart] = useState([]);

    useEffect(() => {
        fetch('chart.json')
            .then(res => res.json())
            .then(data => setChart(data));
    }, [])
    console.log(chart)
    return (
        <div className='container'>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 pt-5 mt-5">
                    <LineChart width={500} height={250} data={chart}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="sell" stroke="#2c3030" />
                    </LineChart>
                </div>
                <div className="col-md-6 pt-5 mt-5">
                    <BarChart
                        width={500}
                        height={250}
                        data={chart}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" background={{ fill: '#eee' }} />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                        <Bar dataKey="sell" fill="#2c3030" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;