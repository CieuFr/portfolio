import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
