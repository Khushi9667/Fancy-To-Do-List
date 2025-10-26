import { Box, CssBaseline } from '@mui/material';
import { AppState } from '../providers/AppState.jsx';
import { AllToDoLists } from './AllToDoLists.jsx';
import { AppHeader } from './AppHeader.jsx';
import { CurrentToDoList } from './CurrentToDoList.jsx';

export function App() {
  return (
    <AppState>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppHeader />
        <AllToDoLists />
        <CurrentToDoList />
      </Box>
    </AppState>
  );
}
