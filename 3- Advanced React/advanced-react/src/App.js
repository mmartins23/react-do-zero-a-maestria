import './App.css';
import Food from './assets/food.jpeg';
import CarDetails from './components/CarDetails';
import ConditionalRendering from './components/ConditionalRendering';
import FootballTeams from './components/FootballTeams';
import ManageData from './components/ManageData';
import RenderingList from './components/RenderingList';
import ShowUserName from './components/ShowUserName';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import { useState } from 'react';
import { Challenge } from './components/Challenge';

function App() {
  const footballTeams = [
    {
      id: 1,
      name: "Manchester United",
      city: "Manchester",
      country: "England",
      stadium: "Old Trafford"
    },
    {
      id: 2,
      name: "Real Madrid",
      city: "Madrid",
      country: "Spain",
      stadium: "Santiago Bernabeu"
    },
    {
      id: 3,
      name: "Bayern Munich",
      city: "Munich",
      country: "Germany",
      stadium: "Allianz Arena"
    }
  ];

  const alertFunction = () => {
    alert("Alert function has been called")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }
  
  
  return (
    <div className="App">
      <h1>Advanced React</h1>
      <img src="/food.jpeg" alt="Italian Food"/>
      <img src={Food} alt="Spanish Food"/>
      <ManageData/>
      <RenderingList/>
      <ConditionalRendering/>
      <ShowUserName username='john-doe'/>
      {/* props, destructuring props, Reuse of components */}
      <CarDetails brand="Tesla" color="white" year={2024}/>
      <CarDetails brand="Ferrari" color="red" year={2014}/>
      <CarDetails brand="Fiat" color="black" year={1998}/>
      {/* list rendering */}
      {footballTeams.map(team => (
        <FootballTeams id={team.id} name={team.name} city={team.city} country={team.country} stadium={team.stadium}/>
      ))}
      {/* children prop */}
      <h3>children prop </h3>
      <Container title='This is the title prop for this'> This is how children prop was used
      </Container>
      {/* function as prop */}
      <h3>function as prop</h3>
      <ExecuteFunction alertFunction={alertFunction} />
      {/* State lift */}
      <h3>State lift </h3>
      <Message message={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* Challenge */}
      <h3>Challenge</h3>
      <Challenge/>
    </div>
  );
}

export default App;
