import './App.css';
import Profile from './Profile/components/Profile';
import profile from '../src/Profile/components/profile.JPG' 

function App() {
  const name="Bouain Do"
  const age="25"
  const bio="Don't care what you say about me I like the way I am."
  const profession="Web developper"
  const handleName=()=>{alert("Do Bouain")}
  return (
    <div className="App">
      <Profile n={name} a={age} bio={bio} p={profession} alert={handleName}>
      </Profile>
      <img src={profile} alt='profile' width="300px"/> 
    </div>
  );
}

export default App;
