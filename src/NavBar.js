import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { withRouter } from "react-router";

const Navbar=(props)=>{
    const loc=props.location.pathname.split('/')[1]
   return <Box w="100%" h="70px"   borderRadius="0px 0px 40px 40px"  padding={3}>
<div className="container">
  <div className="row">
    <div className="col-auto">
      <img src="./logo-blue.png" alt="logo" style={{maxHeight:"80px"}}></img>
    </div>
    
    <div className="col" >
        <div className="row">
        <Button variant="link" colorScheme={loc==="home"?"green":"gray"} 
        onClick={()=>props.history.push('/home')}
        style={{marginLeft:"auto"}} margin={3}>Home</Button>
        <Button variant="link"  colorScheme={loc==="events"?"green":"gray"} 
        onClick={()=>props.history.push('/events')}
        margin={3}>Events</Button>
        </div>
    </div>
   
  </div>
</div>
</Box>
}

export default withRouter(Navbar)