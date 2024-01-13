import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AllOurCustomers from "./components/AllOurCustomers";
import Transfer from "./components/Transfer";
import Transactions from "./components/Transactions";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/all-our-customers" element = {<AllOurCustomers />}/>
        <Route exact path="/transfer" element= {<Transfer />}/>
        <Route exact path="/transactions-history" element={<Transactions />}/>
        <Route exact path="/" element = {<Home />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
