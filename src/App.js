// import Movies from "./components/Movies/Movies";
// import Markdown from './components/Markdown/Markdown';
// import QuoteMachine from './components/QuoteMachine/QuoteMachine';
// import DarkMode from './components/DarkMode/DarkMode';
// import RandomPerson from './components/RandomPerson/RandomPerson';
// import Pagination from './components/Pagination/Pagination';
// import Photos from "./components/Photos/Photos";
// import HackerNews from "./components/HackerNews/HackerNews";

import { AppProvider } from "./components/Quiz/context";
import Quiz from "./components/Quiz/Quiz";


function App() {
  return (
    <AppProvider>
      <Quiz />
    </AppProvider>
  );
}

export default App;
