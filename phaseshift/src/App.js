import './App.css';
import Qna from './components/QnA'
function App() {
  return (
    <div className="App">
    <h1> Round 1</h1>
      
     <Qna num={1} question="The clock ticks backward,,,faster,,,,still faster. All of a sudden the whizzing stops,and you step into a year you have never known “Kai su teknon ” he says .“UHCPNHAL FVBY ULEA” The above is the tag line of a famous company,decode it ? Also name the founder of the company" theme="1"/>
     <Qna num={2} question="Think different” but not too different. Wow!!!! What an ambitious student he was … He went up to an extent of hacking the university computer system, which got him expelled from the university. But there was no looking backHe is the pioneer of the famous tech company. Name him." theme="1"/>
     <Qna num={3} question="Decode the logo above and refer the decoded word to a physical thing which refers to a company whose parent organisation is responsible for a major digital disruption. Name the parent organisation." theme="1"  image="https://ibb.co/cwbY8MY"/>  
     <Qna num={4} question="John Logie Baird featured the first RGB color transmission in 1928. The color model is based on the theory of trichromatic color vision. Each parameter, red, green and blue, displays the intensity of the color as an integer between 0 and 255.         70686f746f706561         https://photos.app.goo.gl/TYAJgsXoeQ6fHe987    Name the company involved" theme="1"/>
     
       
     <Qna num={5} question=" Global Economic Dominance is sought to be achieved by China by 2030 We humans, both male and female prefer the sound of a female voice One of its first kind was created in 1965 which could automatically detect unknown forms of treatment Dear Watson, thanks for leading my way to my family’s heart. All of this revolves around a specific technology. When was it first spoken about? Enter the last character of your answer." theme="2"/> 
     
     <Qna num={5} question="what is your fav color" theme="3"/>
    </div>
  );
}

export default App;
