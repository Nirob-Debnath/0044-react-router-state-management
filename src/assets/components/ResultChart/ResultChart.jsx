import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    {
      "id": 1,
      "student_name": "John Doe",
      "roll_number": "12345",
      "physics": 85,
      "chemistry": 78,
      "math": 92,
      "total": 255,
      "percentage": 85.0
    },
    {
      "id": 2,
      "student_name": "Alice Smith",
      "roll_number": "12346",
      "physics": 88,
      "chemistry": 82,
      "math": 91,
      "total": 261,
      "percentage": 87.0
    },
    {
      "id": 3,
      "student_name": "Bob Johnson",
      "roll_number": "12347",
      "physics": 75,
      "chemistry": 80,
      "math": 85,
      "total": 240,
      "percentage": 80.0
    },
    {
      "id": 4,
      "student_name": "Charlie Brown",
      "roll_number": "12348",
      "physics": 90,
      "chemistry": 85,
      "math": 95,
      "total": 270,
      "percentage": 90.0
    },
    {
      "id": 5,
      "student_name": "David Lee",
      "roll_number": "12349",
      "physics": 78,
      "chemistry": 74,
      "math": 88,
      "total": 240,
      "percentage": 80.0
    }
]  

const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey={`chemistry`} stroke="red"></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;