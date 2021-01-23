import './App.css';
import data from './names.json'

const orderByAmount = [].concat(data.names)
  .sort((a, b) => b.amount - a.amount)
  .map((item, i) =>
  <div>{item.name} {item.amount}</div>
)

function App() {
  return (
    <div className="App">
      <h1>Name Application</h1>
      <div>{orderByAmount}</div>
    </div>
  )}

export default App;
