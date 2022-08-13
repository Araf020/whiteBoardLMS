import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import Login from './Login/Login';
import Register from './Registration/Registration';
import Dashboard from './Dashboard/StudentDashBoard/StudentDashBoard';
import Grade from './Dashboard/Grade/Grade';
import Assignment from './Dashboard/Assignment/Assignment';
import StudentList from './Dashboard/StudentList/StudentList';
import Chat from './Dashboard/Chat/Chat';
import AssignmentDetail from './Dashboard/Assignment/AssignmentDetail';
import CouseDetail from './CourseDetail/Course';
import InstructorDashboard from './Admin/Instructor/InstructorBoard';
import SuperUserDashboard from './SuperUser/SuperUserDashboard';

function MainRouter () {
        return (
            <>
                <Router>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Register />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/grade" element={<Grade />} />
                        <Route path="/assignment" element={<Assignment />} />
                        <Route path="/studentList" element={<StudentList />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/assignmentDetail" element={<AssignmentDetail />} />
                        {/* route with courseId */}
                        <Route path="/courses/:courseTitle/:courseId" element={<CouseDetail />} />
                        <Route path="/instructor/" element={<InstructorDashboard />} />
                        <Route path="/admin/" element={<SuperUserDashboard />} />
                    </Routes>
                </Router>
            </>
        );
    
}

export default MainRouter;