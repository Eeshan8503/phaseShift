import './App.css';
import Qna from './components/QnA'
function App() {
  return (
    <div className="App">
    <h1> Round 1</h1>
      
     <Qna num={1} question="The clock ticks backward,,,faster,,,,still faster. All of a sudden the whizzing stops,and you step into a year you have never known “Kai su teknon ” he says .“UHCPNHAL FVBY ULEA” The above is the tag line of a famous company,decode it ? Also name the founder of the company" theme="1"/>
     <Qna num={2} question="Think different” but not too different. Wow!!!! What an ambitious student he was … He went up to an extent of hacking the university computer system, which got him expelled from the university. But there was no looking backHe is the pioneer of the famous tech company. Name him." theme="1"/>
     <Qna num={3} question="what is your fav color" theme="3"/>
    </div>
  );
}

export default App;
