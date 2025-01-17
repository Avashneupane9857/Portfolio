import WorkTogether from "./components/WorkTogether";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <WorkTogether />
    </main>
  );
}
export default App;
