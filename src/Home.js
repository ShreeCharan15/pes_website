import { Box, Center } from "@chakra-ui/layout";

const Home=()=><>

<br/>
<div className="container">
  <div className="row">
    <div className="col-12 col-md-6" >
    <Center style={{height:"100%"}}>
    <img src="./logo.png" style={{maxHeight:"450px",minHeight:"250px"}}></img>
    </Center>
    </div>
    <br/><br/>
    <div className="col-12 col-md-6">
      <Box borderWidth={1} borderRadius="lg" padding={5} shadow="2xl" borderColor="#9dea7e">
      <div className="display-4" style={{color:"#234E52",fontSize:"30px",fontWeight:"400"}}>PES Day</div>
      On April 22, 2008, the Power Engineering Society changed its name to the Power & Energy Society to focus on helping the environment and the society. This day has been officially commemorated as “PES Day” for the past three years. All activities conducted in the month of April are counted towards PES Day celebration.
    <br/><br/>
    <div className="display-4" style={{color:"#234E52",fontSize:"30px",fontWeight:"400"}}>PES Day 2021 Theme</div>
      Climate Change is perhaps one of the largest problem’s humanity has faced. Our world is changing faster than ever. Being the society that governs the engineering aspect of energy production that has resulted in greenhouse gasses and global warming, we must educate everyone on the solutions and technological developments that are happening to slow down this issue.
      <p  style={{color:"#234E52",fontWeight:"500",margin:"10px 0px"}}>The theme of the 4th IEEE PES DAY is “Clean Energy Revolution”.</p>
      <p style={{margin:"10px 0px"}}>Considering the advisory given by IEEE and WHO, keeping in mind the health of the people, 
      <span style={{color:"#234E52",fontWeight:"500"}}> PES Day 2021 is going to be a strictly virtual event.</span>
      </p>
      <p style={{margin:"10px 0px"}}>
      With this theme in mind, let’s organize virtual events by connecting with a global network of IEEE Members, PES Volunteers, PES Young Professionals to improve PES Day Technical, Humanitarian, Women in Power, and Young Professional Activities.
      </p>
      <p style={{color:"#234E52",fontWeight:"500",margin:"10px 0px"}}>We would like to Encourage our IEEE Members across the Globe to help bring “More Power To the Future with Clean Energy Revolution.”
      </p>
      </Box>
    </div>
  </div>
</div>
</>

export default Home