import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Layout from "./components/custom/Layout";
import Home from "./pages/Home";
import Summarize from "./pages/Summarize";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/summarize" element={<Summarize />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
