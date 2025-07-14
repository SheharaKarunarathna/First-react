import { Button, Card, Container, Grid, Input, Typography } from "@mui/material";

const Userform = props => {
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
                    sx={{ width: '400px'}}
                    value={''}
                    onChange={e => {}}

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
                    value={''}
                    onChange={e => {}}

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