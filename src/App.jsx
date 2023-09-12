import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Main/Blogs/Blogs";
import Bookmarks from "./components/Main/Bookmarks/Bookmarks";

function App() {
  return (
    <>
      <Header />
      <main className="md:flex max-w-6xl mx-auto mt-5">
        <Blogs />
        <Bookmarks />
      </main>
    </>
  );
}

export default App;
