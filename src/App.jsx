import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Inicio } from "./pages/Inicio";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { LayoutPage } from "./Layouts/LayoutPage";
import { NotFound } from "./pages/NotFound";
import { Post } from "./pages/Post";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route element={<Inicio />} index></Route>
          <Route element={<Blog />} path="/blog"></Route>
          <Route element={<Post />} path="blog/:id"></Route>
          <Route element={<Contact />} path="/Contacto"></Route>
          <Route element={<NotFound />} path="*"></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
