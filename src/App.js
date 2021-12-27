import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './App.css';
import ProfileCard from './components/card-profile';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      margin: 0,
      padding: 0,
      height: '100%',
      backgroundColor: "#405168"
  },
  title:{
    marginTop: 0,
    textAlign: "center",
    fontFamily: "Recoleta,'Times New Roman',sans-serif",
    color: "white",
    fontSize: "60px",
    marginLeft: "30px"
  }
}));

const App = () =>{
  const classes = useStyles();
  const [usersData, setUsersData] = useState([]);

  const settings = {
    centerMode: true,
    infinite: false,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    variableWidth: true,
  };

  useEffect(() => {
    getUsers();
},[])


const getUsers = async () => {
  for(let i=0; i < 10; i++){
   await axios.get(`https://randomuser.me/api/`)
    .then(res => {
      console.log(res.data.results[0]);
      setUsersData(prevState => [...prevState, res.data.results[0]]);
    })
  }
}


if (usersData.length < 1) return <h1 style={{textAlign: 'center'}}>Loading...</h1>;

  return (
    <div className={classes.root}>

      <h2 className={classes.title} >User's Profile</h2>

      <Slider {...settings}>

      {usersData.map((item, key ) => {
       return <ProfileCard 
              key={key} 
              userData={item}
              />
      })}

      </Slider>
      </div>
      
  );
}

export default App;
