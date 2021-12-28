import * as React from 'react';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const InstaCards = () => {
  return (
    <Card sx={{ maxWidth: 650 }} style={{marginTop: "40px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
      />
      <CardMedia
        component="img"
        height="100%"
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>

      <CardActions style={{borderTop: '1px solid #DBDBDB'}}>
      <IconButton aria-label="share">
          <SentimentSatisfiedIcon />
        </IconButton>
        <input type="text" placeholder='Add a comment...' style={{color: "grey", width: '100%', border: 'none', outline: 'none'}}  />
        <input type="button" value="Post" style={{color: "#D9EFFE", backgroundColor: 'transparent', width: '10%', border: 'none', outline: 'none'}}  />
      </CardActions>
      
    </Card>
  );
}


export default InstaCards