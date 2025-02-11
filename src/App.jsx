import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Register from "./pages/register/Register"
import Login from "./components/login/Login"
import SignUp from "./components/signup/SignUp"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App