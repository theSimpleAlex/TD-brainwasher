import SerhiiImage from './images/Serhii.jpeg'
import VladImage from './images/Vlad.jpeg';
import VasylImage from './images/Vasyl.jpeg'
import OLeksiiImage from './images/Oleksii.jpeg';


import './App.css';
import TeamMember from "./WorkerComponent/TeamMember";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="m-4">
      <h2 className="text-primary fw-bold">My dream team</h2>
      <div className="d-flex">
        <TeamMember
            name="Serhii"
            surname="Shevchuk"
            position="Backend developer"
            photoUrl={SerhiiImage}
            color="green"
            />
             <TeamMember
            name="Vlad"
            surname="Yakymchuk"
            position="QA engineer"
            photoUrl={VladImage}
            color="green"
          <TeamMember
              name="Vasyl"
              surname="Syman"
              position="Frontend developer"
              photoUrl={VasylImage}
              color="orange"
            /> 
        <TeamMember
            name="Oleksii"
            surname="Uzhva"
            position="Bomba UI/UX"
            photoUrl={OLeksiiImage}
            color="cyan"
            />
      </div>
    </div>
  );
}

export default App;
