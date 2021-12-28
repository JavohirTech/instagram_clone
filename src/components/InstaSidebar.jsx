import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'

const InstaSidebar = () =>{
    return(
        <>
        <CardHeader
        avatar={
          <Avatar sx={{}} aria-label="recipe">
            J
          </Avatar>
        }
        action={
            <Button variant="text" color="primary">
              Switch
            </Button>
        }
        title="javohir.gulomjonov"
        subheader="Javohir G'ulomjonov"
      />
        </>
    )
}

export default InstaSidebar