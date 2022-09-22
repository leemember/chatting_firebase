import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatPage from './components/ChatPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';


const App = () => {

    return (
      <Router>
        <Routes>
          <Route path="/" element={<ChatPage to="/" />} />
          <Route path="/login" element={<LoginPage to="/login" />} />
          <Route path="/register" element={<RegisterPage to="/register"/>} />
        </Routes>
     </Router>
    );
  }

export default App;
