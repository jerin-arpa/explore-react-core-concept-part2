import './App.css'
import Count from './Count';
import Friends from './Friends';
import Posts from './Posts';
import Team from './Team';
import Users from './User';

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

      <Friends></Friends>
      <Users></Users>
      <Count></Count>
      <Team></Team>


      <button className='buttons' onClick={handleClick}>Click Me</button>
      <button className='buttons' onClick={handleClick2}>Click 2</button>
      <button className='buttons' onClick={() => { alert('Button 3 Clicked') }}>Click 3</button>
      <button className='buttons' onClick={() => addTOFive(3)}>Click 4</button>

      <Posts></Posts>
    </>
  )
}

export default App
