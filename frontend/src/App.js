import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { WorkoutsContextProvider } from './context/WorkoutContext.js';
import { useAuthContext } from './hooks/useAuthContext.js';

// pages & components
import Home from './pages/Home'
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Navbar from './components/navbar.js'
 
function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <WorkoutsContextProvider>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route 
                path="/" 
                element={user ? <Home />: <Navigate to="/login"/>} 
              />
              <Route 
                path="/login" 
                element={!user ? <Login /> : <Navigate to = "/"/>} 
              />
              <Route 
                path="/signup" 
                element={!user ? <Signup /> : <Navigate to = "/"/>} 
              />
            </Routes>
          </div>
        </WorkoutsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
