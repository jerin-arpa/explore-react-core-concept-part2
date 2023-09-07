import './App.css'

function App() {

  function handleClick() {
    alert('Button Clicked');
  }


  const handleClick2 = () => {
    alert('Button 2 Clicked')
  }

  const addTOFive = (num) => {
    alert(num + 5);
  }


  return (
    <>
      <h2>React Core Concepts Part2</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('Button 3 Clicked') }}>Click 3</button>
      <button onClick={() => addTOFive(3)}>Click 4</button>
    </>
  )
}

export default App
