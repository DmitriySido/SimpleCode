  import './mainStyle.scss'
  import SidePanel from "./components/SidePanel/SidePanel";
  import Home from "./components/path/Home/Home";
  import Task from "./components/path/Task/Task";
  import { Route, Routes } from "react-router";
  import TasksList from "./components/path/TaskList/TaskList";
  import { textTasks, testJS, userData } from './TaskData/TaskData';
  import Profile from './components/path/Profile/Profile';
  import TypesSciptes from './components/TypesSciptes';
  import Tests from './components/path/Tests/Tests';
  import TestItem from './components/path/Tests/TestItem/TestItem';

function App() {
  // Проверяем, есть ли уже сохраненные данные в localStorage
  const savedUserData = localStorage.getItem('userData');

  // Если сохраненные данные отсутствуют, сохраняем исходный объект userData
  if (!savedUserData) localStorage.setItem('userData', JSON.stringify(userData));

  console.log(savedUserData)

  return (
    <div className='App'>
      <SidePanel />
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='TasksList' element={<TasksList textTasks={textTasks} savedUserData={savedUserData} />} />
        <Route path='Profile' element={<Profile />} />
        <Route path='Tests' element={<Tests testJS={testJS}/>} />

        <Route path='Task/:taskId' element={<Task textTasks={textTasks} />} />
        <Route path='Test/:testId' element={<TestItem testJS={testJS}/>} />
      </Routes>

      {/* <TypesSciptes /> */}
    </div>
  )
}

export default App;