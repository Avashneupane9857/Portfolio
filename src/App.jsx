import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <div className="w-[1150px] mx-auto ">
        {" "}
        <About />
      </div>
    </main>
  );
}
export default App;
