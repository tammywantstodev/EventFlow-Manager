import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import EventsPage from './components/events/EventsPage';
import BookedEvents from '../src/components/user/BookedEvents'; 
import EventForm from './components/events/EventForm';

//App components and creating routes for each page such that they are accessible from any page by click of a button
function App(){
  return(
    <div className='app'> 
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/events" element={<EventsPage />}/>
          <Route path="/booked-events" element={<BookedEvents />}/>
          <Route path="/create-event" element={<EventForm />}/>
        </Routes>
      </Router>
      <Footer />
    </div>  
  )
}
export default App;