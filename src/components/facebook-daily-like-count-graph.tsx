import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FacebookDailyLikeCountGraph = () => {
    // State to store daily like count data
    const [likeCountData, setLikeCountData] = useState([]);

    // Function to fetch daily like count data from Facebook API
    const fetchLikeCountData = async () => {
        try {
            // Example: Replace this with your actual API endpoint
            const response = await fetch('http://localhost:8081/facebook/getLatestPageLikesCount/');
            const data = await response.json();
            setLikeCountData(data);
            console.log("Fetched like count data:", data);
        } catch (error) {
            console.error("Error fetching like count data:", error);
        }
    };

    // Fetch like count data on component mount
    useEffect(() => {
        fetchLikeCountData();
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <div className="facebook-daily-like-count-graph">
            <h3>Daily Facebook Like Count</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={likeCountData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="likeCount" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FacebookDailyLikeCountGraph;
