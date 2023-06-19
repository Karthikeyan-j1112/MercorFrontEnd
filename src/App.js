import './App.css';
import Header from './components/Header';
import { Stack } from '@mui/material';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className="App"  >
      <Stack direction='row' >
        <Sidebar />
        <Stack >
          <Header />
          <Main/>
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
