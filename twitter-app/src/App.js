import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './pages/Feed';
import Explore from './pages/Explore';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Explore />
    </div>
  );
}

export default App;
