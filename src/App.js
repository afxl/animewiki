import logo from './logo.svg';
import './App.css';
import Nav from "./homepage/nav.js"
import Body from './homepage/body';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Outlet></Outlet>
    </div>
  );
}

export default App;
