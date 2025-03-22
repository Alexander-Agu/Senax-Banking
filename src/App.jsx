import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./components/login/Login"
import SignUp from "./components/signup/SignUp"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //     <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/signup" element={<SignUp />} />
    //     </Routes>
    // </BrowserRouter>
  )
}

export default App