// CourseList.js
import React from 'react';

const CourseList = () => {
    const courses = ['React Basics', 'Advanced JavaScript', 'Node.js Fundamentals'];

    return (
        <div>
            <h2>Course List</h2>
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;