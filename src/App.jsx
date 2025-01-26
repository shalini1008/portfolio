import About from "./Components/About"
import ContactUs from "./Components/Contact"
import Experience from "./Components/Experience"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Project from "./Components/Project"
import Technologies from "./Components/Technologies"

function App() {
  return (
   <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-500 selection:text-cyan-950">
    <div className="fixed top-0 -z-10 h-full w-full">
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"> </div>
    </div>
    <div className=" mx-auto px-8">
    <Navbar/>
    <Hero/>
    <About/>
    <Technologies/>
    <Experience/>
    <Project/>
    <ContactUs/>
    </div>
   </div>
  )
}

export default App
