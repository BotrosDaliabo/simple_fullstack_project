import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';
import useStyles from './styles';

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} pris={post.pris} />
      <CardContent className={classes.overlay}>
        <div>
          <Typography variant="h6">{post.namn}</Typography>
          <Typography variant="h7">{post.pris}kr</Typography>
          <Typography variant="body1" color="textSecondary" component="p">{post.beskrivning}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Post;
