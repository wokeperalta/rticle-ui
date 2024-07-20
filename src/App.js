import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Write from "./pages/write/Write";
import About from "./pages/About";
import Latest from "./pages/Latest";
import Trending from "./pages/Trending";
import Single from "./pages/Single";
import PublicUser from "./pages/PublicUser";
import PrivateUser from "./pages/PrivateUser";
import Admin from "./pages/Admin/Admin";
import ViewArticle from "./pages/ViewArticle";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/write" component={Write} />
        <Route path="/about" component={About} />
        <Route path="/latest" component={Latest} />
        <Route path="/trending" component={Trending} />
        <Route path="/single" component={Single} />
        <Route path="/publicprofile" component={PublicUser} />
        <Route path="/privateprofile" component={PrivateUser} />
        <Route path="/admin" component={Admin} />
        <Route path="/read/:id" component={ViewArticle} />
        <Route path="/error" component={Error} />

        <Toaster />
      </div>
    </Router>
  );
}

export default App;
