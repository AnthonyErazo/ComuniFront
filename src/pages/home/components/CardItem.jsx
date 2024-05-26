import axios from "axios";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import "../styles/Card.css";
import { Link } from "react-router-dom";

const CardItem = ({ grupo }) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={grupo.img}
          alt={grupo.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {grupo.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis est hic iusto quam maxime consectetur recusandae sequi quisquam rerum, nam debitis facere voluptates, exercitationem cum quis aut quasi nulla esse.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={'/'}>Ver mas</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
