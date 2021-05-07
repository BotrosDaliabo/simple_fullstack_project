import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ namn: '', title: '', beskrivning: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((beskrivning) => beskrivning._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ namn: '', pris: '', beskrivning: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.pris}"` : 'Lägg till en vara'}</Typography>
        <TextField name="namn" variant="outlined" label="namn" fullWidth value={postData.namn} onChange={(e) => setPostData({ ...postData, namn: e.target.value })} />
        <TextField name="pris" variant="outlined" label="pris" fullWidth value={postData.pris} onChange={(e) => setPostData({ ...postData, pris: e.target.value })} />
        <TextField name="beskrivning" variant="outlined" label="Beskrivning" fullWidth multiline rows={4} value={postData.beskrivning} onChange={(e) => setPostData({ ...postData, beskrivning: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Lägg till</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Rensa</Button>
      </form>
    </Paper>
  );
};

export default Form;
