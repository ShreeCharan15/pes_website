import { Button } from "@chakra-ui/button"
import { Box, Center, Stack } from "@chakra-ui/layout"

const Events=()=>{

const ev=[
    {col:"Collaborator",name:"Event name",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt eu lorem vel pellentesque. Etiam tempus ligula convallis elit mattis luctus. Pellentesque nec congue quam, in cursus sem. Cras ut rutrum nulla, vel pretium leo. Donec porttitor mollis tortor, nec fringilla ipsum pellentesque vel. Nunc malesuada tellus a libero accumsan aliquet at quis libero. In aliquet nulla eu urna fringilla, ornare vehicula sem ornare. Praesent lobortis vehicula tristique. Duis arcu arcu, feugiat id commodo eu, dignissim vitae purus. Maecenas nec lorem id orci efficitur vulputate a in tellus. Curabitur et lobortis lacus. Curabitur feugiat, ex sit amet rhoncus pharetra, ex nunc malesuada justo, id mollis elit lacus vel lectus. In interdum euismod libero ac maximus. ",
    date:"28 Apr",time:"4 PM",link:""},
    {col:"Collaborator",name:"Event name",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt eu lorem vel pellentesque. Etiam tempus ligula convallis elit mattis luctus. Pellentesque nec congue quam, in cursus sem. Cras ut rutrum nulla, vel pretium leo. Donec porttitor mollis tortor, nec fringilla ipsum pellentesque vel. Nunc malesuada tellus a libero accumsan aliquet at quis libero. In aliquet nulla eu urna fringilla, ornare vehicula sem ornare. Praesent lobortis vehicula tristique. Duis arcu arcu, feugiat id commodo eu, dignissim vitae purus. Maecenas nec lorem id orci efficitur vulputate a in tellus. Curabitur et lobortis lacus. Curabitur feugiat, ex sit amet rhoncus pharetra, ex nunc malesuada justo, id mollis elit lacus vel lectus. In interdum euismod libero ac maximus. ",
    date:"28 Apr",time:"4 PM",link:""},
    {col:"Collaborator",name:"Event name",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt eu lorem vel pellentesque. Etiam tempus ligula convallis elit mattis luctus. Pellentesque nec congue quam, in cursus sem. Cras ut rutrum nulla, vel pretium leo. Donec porttitor mollis tortor, nec fringilla ipsum pellentesque vel. Nunc malesuada tellus a libero accumsan aliquet at quis libero. In aliquet nulla eu urna fringilla, ornare vehicula sem ornare. Praesent lobortis vehicula tristique. Duis arcu arcu, feugiat id commodo eu, dignissim vitae purus. Maecenas nec lorem id orci efficitur vulputate a in tellus. Curabitur et lobortis lacus. Curabitur feugiat, ex sit amet rhoncus pharetra, ex nunc malesuada justo, id mollis elit lacus vel lectus. In interdum euismod libero ac maximus. ",
    date:"28 Apr",time:"4 PM",link:""}
]

return <div className="container" >
    <br/> <br/> 
    {
        ev.map((e,ind)=><div key={ind}>
        <p className="display-4" style={{fontSize:"30px",fontWeight:"400",color:"#2C7A7B"}}>{e.col}</p>
        <br/>
    <Box borderWidth={1} borderColor="green.200" shadow="lg" padding={10} borderRadius={10} marginBottom={10}>
        <div className="row">
            <div className="col-4 col-md-2">
            <Box borderRightWidth={1} borderColor="green.200" style={{height:"100%"}}>
                <Center style={{height:"100%"}}>
                    <Stack style={{textAlign:"center",color:"#2C7A7B"}}>
                    <p className="display-4" style={{fontSize:"30px",fontWeight:"400"}}>{e.date}</p>
        <p className="display-4" style={{fontSize:"30px",fontWeight:"400"}}>{e.time}</p>
                    </Stack>
                </Center>
            </Box>
            </div>
            <div className="col-8 col-md-10" > 
            <p className="display-4" style={{fontSize:"25px",fontWeight:"400",color:"#2C7A7B"}}>{e.name}</p>
            <p style={{color:"#2F855A"}}>{e.desc}</p>
            <br/>
            <a href={e.link}><Button colorScheme="green" variant="outline">Register here</Button></a>
            </div>
        </div>
    </Box>
        </div>)
    }

    
</div>}

export default Events