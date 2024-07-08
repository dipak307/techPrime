import './App.css';
import CreateProject from './components/CreateProject';
import {Routes,Route,useLocation} from 'react-router-dom';
import LoginForm from './components/LoginForm';

function App() {
     const location=useLocation();
  return (
    <div className="App">
     <Routes>
        <Route path='/login' element={<LoginForm />} />
        {/* Add other routes here if needed */}
      </Routes>
      {location.pathname !== '/login' && <CreateProject />}
    </div>
  );
}
export default App;







