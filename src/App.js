import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';

function App() {
  return (
    <div>
   <Routes>
    <Route path="/" element={<Dashboard></Dashboard>}>
    <Route index element={<Home/>}></Route>
    </Route>
   </Routes>
    </div>
  );
}

export default App;
