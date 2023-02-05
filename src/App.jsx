import HomePage from "./components/HomePage"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import DetailPage from "./components/DetailPage"
import Wkaufer from "./components/Wkaufer"
import WeatherApp from "./components/Weather"
import ChatAppMessage from "./components/Chatapp"

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/wkaufer" element={<Wkaufer/>}/>
          <Route path="/weather" element={<WeatherApp/>}/>
          <Route path="/chatapp" element={<ChatAppMessage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
