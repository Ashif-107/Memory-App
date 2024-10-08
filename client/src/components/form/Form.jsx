import { useState, useEffect } from 'react';
import useStyles from './styles'

import { TextField, Button, Typography, Paper } from '@mui/material'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts';

import { useSelector } from "react-redux"

const Form = ({ currentId, setCurrentId }) => {

  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

  useEffect(() => {
    if (post) setPostData(post);
  }, [post])

  const classes = useStyles();
  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    creator: ' ',
    title: ' ',
    message: ' ',
    tags: ' ',
    selectedFile: ' '
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {

      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData))

    }
    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setPostData(
      {
        creator: ' ',
        title: ' ',
        message: ' ',
        tags: ' ',
        selectedFile: ' '
      }
    )
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography varient="h4"  >{currentId ? 'Editing' : 'Creating'} some memory</Typography>
        <TextField name="creator" varient="outlined" label="creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" varient="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" varient="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" varient="outlined" label="tags " fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
        <div className={classes.fileInput}>
          <FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <Button className={classes.buttonSubmit} varient="contained" color="primary" size="large" type='submit' fullwidth="true" >Create</Button>
        <Button varient="contained" color="secondary" size="small" onClick={clear} fullwidth="true">Clear</Button>
      </form>
    </Paper>
  )
}

export default Form
