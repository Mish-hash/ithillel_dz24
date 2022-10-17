
import './App.css';
import CounterNotes from './components/CounterNotes/CounterNotes';
import InputField from './components/InputField/InputField';
import NoteList from './components/NoteList/NoteList';


function App() {
  return (
    <div className="App">
      <InputField/>
      <NoteList/>
      <CounterNotes/>
    </div>
  );
}

export default App;
