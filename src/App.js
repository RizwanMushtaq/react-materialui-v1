import './App.css';
import MyId from './components/MyId'
import MyTabs from './components/MyTabs'

import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles( (theme) => ({
  root: {
    flexGrow: 1,
  },
  myIdClass: {
    justify: 'center',
  }

}))

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className="App-large">
        <Container maxWidth='lg' component={'div'} className='myContainer'>
          <Typography component={'div'} style={{ backgroundColor:'#cfe8fc', height: '100vh'}}>
            
            <div style={{ display:'flex'}}>
                <div style={{ flex: '0 0 250px'}} className="myIdDiv">
                  <MyId />
                </div>
                <div style={{ flexGrow: '1', marginLeft: '8px',}}>
                  <MyTabs />
                </div>
            </div>

          </Typography>
        </Container>
      </div>
  </div>
  );
}

export default App;
