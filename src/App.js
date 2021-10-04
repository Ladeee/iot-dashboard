import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Index';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/dashboard/:tabid" component={Dashboard} exact />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
