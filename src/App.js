import './App.css';
import MainLayout from './page/MainLayout';
import AppRoutes from '../src/AppRoutes';
import { BrowserRouter } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App-main-container">
     <AppRoutes/>


      </div>
    </BrowserRouter>
  );
}

export default App;
