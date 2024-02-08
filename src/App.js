// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import {loadMicroApp} from 'qiankun'

function App(props) {

  loadMicroApp({
    name: 'question-app',
    entry: 'http://localhost:3003',
    container: '#question-app',
    props: {
      from: 'Article',
    },
  });
  
  const onClick = () => {
    props.appConfig.singleSpa.navigateToUrl('/article')
  }

  return (
    <div className="App">
      <h2>Quiz</h2>
      <p>This is Quiz micro-app. will load question:</p>
      <div id="question-app"></div>
      <button onClick={onClick}>Go to Article app</button>
    </div>
  );
}

export default App;
