import logo from './logo.svg';
import './App.css';
import MyId from './components/MyId'
import MyTabs from './components/MyTabs'

import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing={0}>
          <MyId />
          <MyTabs />
        </Grid>
      </header>
    </div>
  );
}

export default App;
