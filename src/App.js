import "./App.css"
import Grid from '@mui/material/Grid';
import NavBar from "./components/navBar/navBar"
import Blog from "./components/pages/Blog"
import Home from "./components/pages/Home"
import Review from "./components/pages/Review"
import Lore from "./components/pages/Lore"
import VocalGuide from "./components/pages/VocalGuide";
import PerformanceGuide from "./components/pages/PerformanceGuide";
import background from "./components/images/background.png";

function App() {
  let Component

  switch(window.location.pathname){
      case "/":
        Component = Home
        break
      case "/Home":
        Component = Home
        break
      case "/Blog":
        Component = Blog
        break
      case "/Review":
        Component = Review
        break
      case "/Lore":
        Component = Lore
        break      
      case "/VocalGuide":
        Component = VocalGuide
        break     
      case "/PerformanceGuide":
        Component = PerformanceGuide
        break            
      default:
        Component = Home
  }  
  return (
    <div className="App">
      <Grid container className="App">
        <NavBar/>
        <div style={{ backgroundImage: `url(${background})`, 
                      backgroundRepeat: 'round',
                      backgroundSize: 'contain',
                      height: '100%',
                      width: '100%',
                      minHeight: '1600px'}}>
          <Component/>
        </div>
      </Grid>
    </div>
  );
}

export default App;
