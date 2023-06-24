import { useState } from 'react';
import './App.css'
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import { Routes, Route } from 'react-router-dom';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Navbar from '../../Components/Navbar';

export default function App() {

  const [user,setUser] = useState(null)


  return (
    <main className="App">
      {user ? 
      <>
        <Navbar />
        <Routes>
          <Route path='/orders' element={<OrderHistoryPage />} />
          <Route path='/orders/new' element={<NewOrderPage />} />
        </Routes>
      </>
      :
      <AuthPage />
      }
    </main>
  );
}
