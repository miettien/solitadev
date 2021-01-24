import './App.css';
import data from './names.json'

const orderByAmount = [].concat(data.names)
  .sort((a, b) => b.amount - a.amount)
  .map((item, i) =>
  <div id="wrapper">
    <div id="name">{item.name}</div> 
    <div id="amount">{item.amount}</div>
  </div>
  
)

function App() {
  return (
    <div id="App-header">
      <h1>Name Application</h1>
      <div>{orderByAmount}</div>
    </div>
  )}

export default App;
