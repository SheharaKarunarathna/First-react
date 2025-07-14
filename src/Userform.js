import { Button, Container, Grid, Input } from "@mui/material";

const Userform = () => {
    container
    return(
        <Grid
            container
            spacing= {2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                display: 'block',
            }}
        >
            <Grid item xs= {12}> 
                <Tipography component = {'h1'} sx={{color: '#000000'}}>User Form</Tipography>
            </Grid>
            
            <Grid>
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
            
            <Button
                sx={{
                    margin:'auto',
                    marginBottom: '20px',
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    marginLeft: '15px',
                    marginTop: '20px',
                    '&:hover':{
                        opacity: 0.7,
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