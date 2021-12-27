import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

const ProfileCard = (props) =>  {

  const mainContent = (
    <Box sx={{ width: '100%', maxWidth: 600,}}>
    <Typography variant="body2" gutterBottom>
      <ul>
        <li> {"Reg. Age: " + props.userData.registered.age}</li>
        <li> {"Reg. Date: " + props.userData.registered.date.slice(0, 10)}</li>
        <li> {"Phone: " + props.userData.phone}</li>
        <li> {"Nat: " + props.userData.nat}</li>
      </ul>
    </Typography>
    <Typography variant="body2" gutterBottom>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </Typography>
    
    </Box>
  );

  const subheader = (
    <div>
    <Typography variant="caption" component="div">
        Age:{props.userData.dob.age}
      </Typography>
      <Typography variant="caption" component="div">
      Date: {props.userData.dob.date.slice(0, 10)}
    </Typography>
    <Typography variant="caption" component="div">
      Cell: {props.userData.cell}
    </Typography>
    <Typography variant="caption" component="div">
      Email: {props.userData.email.slice(0, 23)}      
    </Typography>
    </div>
  );
  

  return (
    <Card  sx={{ maxWidth: 345, backgroundColor: "#EFF2F5"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], width: 56, height: 56  }} aria-label="recipe" src={props.userData.picture.medium} ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        
        title={
         <> 
         <div style={{display:"inline"}}>{props.userData.name.title + " - " + props.userData.name.first + " " + props.userData.name.last}</div> 
        {props.userData.gender === "male" ? <FemaleIcon/> : <MaleIcon/>} 
        </>
        }
        
        subheader={subheader}
      />
      <CardContent>
        {mainContent}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    
    </Card>
  );
}

export default ProfileCard;
