import './App.css';
import TopBar from './TopBar';
import TaskList from './TaskList';
import React from "react";

function App() {
  return (
    <React.Fragment>
      <TopBar />
      <TaskList />
    </React.Fragment>
  );
}

export default App;
