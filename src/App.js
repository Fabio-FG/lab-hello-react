
import './App.css';
import Navbar from './components/navbar';
import Button from './components/Button';
import Icon1 from './images/Icon1';
import Icon2 from './images/Icon2';
import Icon3 from './images/Icon3';
import Icon4 from './images/Icon4';

function App() {
  return (
    <div className="App">

    <div className="top-container">

      <Navbar />
      <div className="text">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
      </div>
      <Button />
    </div>
    <div className="images">
     <div className="box">
        < Icon1 />
        <h3>Declarative</h3>
        <p> React makes it painless to create interactive UIs</p>
     </div>

     <div className="box">
        < Icon2 />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state</p>
     </div>
     
     <div className="box">
        < Icon3 />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the componenet's</p>
     </div>


      <div className="box">
        < Icon4 />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>

    </div>
  );
}

export default App;
