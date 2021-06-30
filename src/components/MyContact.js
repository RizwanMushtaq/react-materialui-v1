import React, { useState } from 'react'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 975,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootInner: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
  form: {
      flexDirection: 'column',
      justifyContent: 'center',
      
  },
  send: {
      width: 200,
      margin: 32,
  },
  form1:{
      margin: '32px',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'stretch',
      width: '400px',
      minWidth: '300px',
      border: 'solid 2px green',
  },
});

export default function MyContact() {
  const classes = useStyles()
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {error: false, msg: null}
  })
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleServerResponse = (ok, msg) => {
    if(ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {error: false, msg: msg}
      })
      setInputs({
        name: '',
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: {error: true, msg: msg}
      })
    }
  }
  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/xqkwlben',
      data: inputs
    })
      .then(response => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  return (
    // <Card className={classes.root}>
      
    //   <CardActions className={classes.form}>
    //         <form onSubmit={handleOnSubmit} className={classes.form1} component= >
    //           <TextField 
    //             id="standard-basic" 
    //             label="Name"
    //             type="text"
    //             id="name"
    //             name="_name"
    //             onChange={handleOnChange}
    //             required
    //             value={inputs.name} 
    //             style={{flexGrow: '1', padding: '8px'}}/>

    //           <TextField 
    //             id="standard-basic" 
    //             label="email"
    //             type="email"
    //             id="email" 
    //             name="_replyto"
    //             onChange={handleOnChange}
    //             required
    //             value={inputs.email}
    //             style={{flexGrow: '1', padding: '8px'}} />
              
    //           <TextField 
    //             id="standard-basic" 
    //             label="Message"
    //             type="text"
    //             id="message"
    //             multiline
    //             rows={4}
    //             name="message"
    //             onChange={handleOnChange}
    //             required
    //             value={inputs.message} 
    //             style={{flexGrow: '1', padding: '8px'}}/>

    //           <Button 
    //               size="large" 
    //               color="primary"
    //               variant="contained"
    //               type="submit"
    //               disabled={status.submitting}
    //               className={classes.send}
    //           >
    //             {!status.submitting
    //               ? !status.submitted
    //                 ? 'Submit'
    //                 : 'Submitted'
    //               : 'Submitting...'}
    //           </Button>
    //         </form>
            
    //         {status.info.error && (<div className="error">Error: {status.info.msg}</div>)}
    //         {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}

    //   </CardActions>
    // </Card>

    <form component={'span'}>
      Hi
    </form>
  );
}