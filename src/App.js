import './App.css';
import Input from './Component/Input';
import PersonalInfo from './Component/PersonalInfo';
import {info} from './data';
import { useState } from 'react';

function App() {
  const [manage_info, setManageInfo] = useState(info)

  const filterHandler = (value_update) => {
    let result = info.filter((ideal) => {
        // console.log(idea, value_update)
        return ideal.firstName.includes(value_update) || ideal.lastName.includes(value_update) || ideal.title.includes(value_update)
    }) 
    setManageInfo(result)  
  }
  const handler = (e) => {
    const {value} = e.target;
   filterHandler(value)
  }
  return (
    <div className='body'>
      <div className='body1'>
      <Input onChangeHandler={handler}/>

      <div className='individual-data'>
        {manage_info.map((e)=> {
          return(
            <PersonalInfo 
              key={e.id}
              src={e.picture} 
              id={e.id} 
              title={e.title} 
              firstname={e.firstName} 
              lastname={e.lastName}
            />
            )
          } )}
         {/* <PersonalInfo/> */}
       </div>
      
      </div>
    </div>
  );
}

export default App;
