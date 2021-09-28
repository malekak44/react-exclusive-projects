import markdown from './images/markdown.png';
import quote from './images/quote.png';
import person from './images/person.png';
import photos from './images/photos.png';
import pagination from './images/pagination.png';
import movies from './images/movies.png';
import calculator from './images/calculator.png';
import drum from './images/drum.png';
import pomodoro from './images/pomodoro.png';
import dark from './images/dark.png';
import hacker from './images/hacker.png';
import quiz from './images/quiz.png';
import Markdown from '../../components/Markdown/Markdown';
import QuoteMachine from '../../components/QuoteMachine/QuoteMachine';
import RandomPerson from '../../components/RandomPerson/RandomPerson';
import Photos from '../../components/Photos/Photos';
import Pagination from '../../components/Pagination/Pagination';
import Movies from '../../components/Movies/Movies';
import Calculator from '../../components/Calculator/Calculator';
import DrumMachine from '../../components/DrumMachine/DrumMachine';
import Pomodoro from '../../components/Pomodoro/Pomodoro';
import DarkMode from '../../components/DarkMode/DarkMode';
import HackerNews from '../../components/HackerNews/HackerNews';
import Quiz from '../../components/Quiz/Quiz';

const projects = [
    {
        id: 1,
        title: "Markdown Previewer",
        image: markdown,
        component: Markdown,
    }, {
        id: 2,
        title: "Random Quote Machine",
        image: quote,
        component: QuoteMachine,
    }, {
        id: 3,
        title: "Random Person",
        image: person,
        component: RandomPerson,
    }, {
        id: 4,
        title: "Photos",
        image: photos,
        component: Photos,
    }, {
        id: 5,
        title: "Pagination",
        image: pagination,
        component: Pagination,
    }, {
        id: 6,
        title: "Movies",
        image: movies,
        component: Movies,
    }, {
        id: 7,
        title: "Calculator",
        image: calculator,
        component: Calculator,
    }, {
        id: 8,
        title: "Drum Machine",
        image: drum,
        component: DrumMachine,
    }, {
        id: 9,
        title: "25 + 5 Clock",
        image: pomodoro,
        component: Pomodoro,
    }, {
        id: 10,
        title: "Dark Mode",
        image: dark,
        component: DarkMode,
    }, {
        id: 11,
        title: "Hacker News",
        image: hacker,
        component: HackerNews,
    }, {
        id: 12,
        title: "Quiz",
        image: quiz,
        component: Quiz,
    },
]

export default projects;