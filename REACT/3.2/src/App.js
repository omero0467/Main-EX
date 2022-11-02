import logo from './logo.svg';
import './App.css';

function App() {
  const data = ["hello","world"];
  const number1 = 5;
  const number2 =6;
  const string ="I love React!"
  return (
    <div className="App">
      <div>{`${data[0]} ${data[1]}`}</div>
      <div>{`${number1} + ${number2} = ${number1+number2}`}</div>
      <div>{`${string} `} The string's lentgh is {string.length}</div>

    </div>
  );
}

export default App;
