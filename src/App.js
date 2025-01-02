import './App.css';
import MainLayout from './page/MainLayout';
import AppRoutes from '../src/AppRoutes';
import { BrowserRouter } from "react-router-dom";
import Loader from "../src/component/Loader";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App-main-container">
     <AppRoutes/>
        {/* <Loader /> */}

      </div>
    </BrowserRouter>
  );
}

export default App;
