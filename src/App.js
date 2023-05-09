import './App.css';
import Input from './Component/Input';
import PersonalInfo from './Component/PersonalInfo';

function App() {
  return (
    <div className='body'>
      <div className='body1'>
      <Input/>

      <div className='individual-data'>
      <PersonalInfo/>
      <PersonalInfo/>
      <PersonalInfo/>
      <PersonalInfo/>
      </div>
      
      </div>
    </div>
  );
}

export default App;
