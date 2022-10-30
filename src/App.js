import './App.css';

function App() {

  const title = 'welcom mithila';
  const number = 50;
  const person = {name:'lishan', age:25};
  const link = "https://www.google.com";

  return (
    <div className="App">
     <div className='content'>
        <h1>{title}</h1>

        <h2>{number}</h2>
        <h3>My age is {person.age}</h3>

        <h4>{10+2}</h4>
        <h4>{'hello ninja'}</h4>
        <h4>{[1,2,3,4,5]}</h4>
        <h4>{Math.random()*10}</h4>

        <a href={link}>Google link</a>
      </div> 
    </div>
  );
}

export default App;
