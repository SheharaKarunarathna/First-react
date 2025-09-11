import { Button, Card, Container, Grid, Input, Typography } from "@mui/material";
import { useState } from "react";

const Userform = props => {

    const [id,setId] = useState(0)
    const [name,setName] = useState('')

    return(
        <Grid
            container
            spacing= {6}
            sx={{
                backgroundColor: '#b0e0e6',
                marginBottom: '20px',
                display: 'block',
            }}
        >
            <Grid item xs= {20}> 
                <Typography component = {'h6'} sx={{color: '#000000' , fontSize:'20px'} }>User Form</Typography>
            </Grid>
            
            <Grid item xs= {12} sm = {6} sx={{display: 'flex'}}>
                <Typography 
                component={'label'} 
                htmlFor="id"
                sx={{color: '#000000',
                    marginRight: '20px',
                    fontSize: '16px',
                    width: '100px',
                    display: 'block',
                }}
                >
                    ID
                </Typography>
                <Input
                    type= "text"
                    id= 'name'
                    name = 'name'
                    variant="outlined"
                    sx={{ width: '400px'}}
                    value={id}
                    onChange={e => setId(e.target.value)}

                />
            </Grid>
            
            <Grid item xs= {12} sm = {6} sx={{display: 'flex'}}>
                <Typography 
                component={'label'} 
                htmlFor="id"
                sx={{color: '#000000',
                    marginRight: '20px',
                    fontSize: '16px',
                    width: '100px',
                    display: 'block',
                }}
                >
                    Name
                </Typography>
                <Input
                    type= "text"
                    id= 'name'
                    name = 'name'
                    sx={{ width: '400px'}}
                    value={name}
                    onChange={e => setName(e.target.name)}

                />
            </Grid>

            <Button
                sx={{
                    margin:'auto',
                    marginBottom: '20px',
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    marginLeft: '15px',
                    marginTop: '20px',
                    '&:hover':{
                        opacity: '0.7',
                        backgroundColor: '#00c6e6',
                    }
                }}
            >
                Add
            </Button>

        </Grid>
    );
};

export default Userform;