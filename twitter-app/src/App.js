import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './pages/Feed';
import Explore from './pages/Explore';

function App() {
  return (
    <div className="app">
        <div className="aside">
          <Sidebar />
        </div>
        <div className="mainBody">
          <Feed />
          <Explore />
        </div>
    </div>
  );
}

export default App;
