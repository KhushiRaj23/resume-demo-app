import './App.css'
import HomePage from './components/Homepage/homepage'
import Navbar from './components/NavBar/Navbar'
import './assets/github_icon.png'
import TechStack from './components/TechStack/techstack'
import Experiences from './components/Experience/experiene'
import Projects from './components/projects/project'
import Contact from './components/Contact/contact'
/*
Portfolio Website:-
1.NavBar
2.HomePage
3.Tech Stack
4.Experinces
5.Projects
*/
function App() {

  return (
    
     <div className='app'>
      <Navbar />
      <HomePage/>
      <TechStack/>
      <Experiences/>
      <Projects/>
      <Contact/>
     </div>
  )
}

export default App
