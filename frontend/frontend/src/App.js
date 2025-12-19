import './App.css';
import Login from './components/Forms/Login';
// import Emergency from './components/Home/Emergency';
// import Navbar from './components/Home/Navbar';
// import First from './components/Home/First';
// import Footer from './components/Home/Footer';
// import SemiFooter from './components/Home/SemiFooter';
import Register from './components/Forms/Register';

function App() {
  return (
    <div className="App">
      {/* <Emergency />
      <Navbar />
      <First />
      <SemiFooter />
      <Footer /> */}

      <Register />
      <Login />
    </div>
  );
}

export default App;
