import { Box } from "@mui/material";
import Userform from "./Userform";
import UsersTable from "./UsersTable"


const members = [

    {   
        id: 1,
        name: "Kumara",

    } ,

    {
        id:2,
        name: "Saman"

    }

]

const Users = () => {
    return (
        <Box
            sx={{
                width : 'calc(100% - 100px)',
                margin : 'auto',
                marginTop : '100px',
            }} 
        
        >
            <Userform />
            <UsersTable rows = {members}/>
        </ Box>
    );    
}

export default Users;
