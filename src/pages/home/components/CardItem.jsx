import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import "../styles/CardItem.css";
import { Link } from "react-router-dom";

const CardItem = ({ grupo, isLoading }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={'/groups/1'} style={{color:'#111'}}>
        <CardActionArea>
          {isLoading ? (
            <Skeleton variant="rectangular" width={'100%'} height={200} />
          ) : (
            <CardMedia
              component="img"
              height="200"
              image={grupo.img}
              alt={grupo.title}
            />
          )}
          <CardContent>
            {isLoading ? (
              <>
                <Skeleton variant="text" width={70} height={30}/>
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="100%" height={20}/>
                <Skeleton variant="text" width="100%" height={20}/>
              </>
            ) : (
              <>
                <Typography gutterBottom variant="h5" component="div">
                  {grupo.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="description">
                  {grupo.description}
                </Typography>
              </>
            )}
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        {!isLoading ? (
          <Button sx={{
            textTransform:'capitalize',
          }}>
            <Link to={'/groups/1'} style={{color:'#111'}}>Ver mas</Link>
          </Button>
        ) : (<Skeleton variant="text" width={80} height={40}/>)}
      </CardActions>
    </Card>
  );
};

export default CardItem;
