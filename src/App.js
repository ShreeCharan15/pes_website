import './App.css';
import { Box } from '@chakra-ui/layout';
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home';
import Events from './Events';
import Navbar from './NavBar';

function App() {
  return (
    <div className="App">
      <Box bgGradient="linear(to-br, white, #9dea7e)" bgAttachment="fixed" style={{minHeight:"100vh"}}>
      <Navbar></Navbar>
      <Switch>
        <Route path="/home" component={()=><Home></Home>}></Route>
        <Route path="/events" component={()=><Events></Events>}></Route>
        <Redirect to="/home"></Redirect>
      </Switch>
      <br/><br/><br/><br/>
      </Box>
    </div>

  );
}

export default App;
