import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      margin: '10px',
    },
  },
  paper: {
    padding: '15px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px'
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    
  },
  buttonSubmit: {
    marginBottom: 10,
    background: 'orange',
  },
}));