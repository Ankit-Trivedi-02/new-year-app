import Navbar from "./components/Navbar";
import Selection from "./components/Selection";
import Preview from "./components/Preview";
import Snowfall from "./components/Snowfall";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 pt-24">
      <Navbar />
      <Snowfall />

      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-6">
        <Selection />
        <Preview />
      </div>
      <Footer />
    </div>
  );
};

export default App;
