import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import About from "./About";
import Nav from "./Nav";
import { DataProvider } from "./context/DataContext";
import EditBody from "./EditBody";

function App() {
  return (
    <div className="App">
      <Router>
        <Header title="ReactJs Blog" />
        <DataProvider>  
        <Nav />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/post" element={<NewPost />} />
            <Route path="/edit/:id" element={<EditBody />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </DataProvider>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
