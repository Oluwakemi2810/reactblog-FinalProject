import Home from "./pages/home/Home";
import Topbar from "./components/topbar/TopBar";
import Single from "./pages/home/single/Single";
import Write from "./pages/home/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import SinglePost from "./singlePost/SinglePost";

function App() {
  const user = false;
  return (
    <Router>
       <Topbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/post/:postId" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}




export default App;

