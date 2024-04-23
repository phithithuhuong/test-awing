import { Button } from '@mui/material';
import './App.css';
import { TabsContainer } from './containers/tabs';
function App() {
  return (
    <div className="App">
      <div className=' px'>
        <div className=' submit'>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </div>

      <div className=' tabs'>
        <TabsContainer />
      </div>

    </div>
  );
}

export default App;
