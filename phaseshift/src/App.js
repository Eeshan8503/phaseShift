import './App.css';
import Qna from './components/QnA'
function App() {
  return (
    <div className="App">
     <Qna num={1} question="what is your name" theme="1"/>
     <Qna num={2} question="what is your DOB" theme="2"/>
     <Qna num={3} question="what is your fav color" theme="3"/>
    </div>
  );
}

export default App;
