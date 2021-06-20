
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Email from './components/Email/Email'
import CardSmall from './components/CardSmall/CardSmall';
import CardLarge from './components/CardLarge/CardLarge';
import Table from './components/Table/Table';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <CardSmall/>
      <Table/>
    </div>
  );
}

export default App;
