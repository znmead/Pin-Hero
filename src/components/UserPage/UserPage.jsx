import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import swal from 'sweetalert';



// let [pins, setPins] = useState([]);

function UserPage() {

  const dispatch = useDispatch();

  // setPins([...pins]);
  useEffect(() => {
    dispatch({ type: 'FETCH_PIN' });
    
  }, []);

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const pins = useSelector((store) => store.pins);
  console.log('user, pins',pins);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <p>Your pins are: </p>
      <div className="pins">
        <ul>
          {pins.map(pin => {
            return (
              <li key={pin.id}>{pin.team}</li>
            )
          })}
        </ul>
      </div>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
