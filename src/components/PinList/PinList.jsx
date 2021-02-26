import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PinList.css'
import { useHistory } from 'react-router-dom';

function PinList() {

    const dispatch = useDispatch();
    const pins = useSelector(store => store.pins);
    const history = useHistory();

    const setPinDetails = (pin) => {
        console.log(`You want to see the details for ${pin.team}`);
        dispatch({
            type: 'SET_PIN_DETAILS',
            payload: pin,
        });

        history.push('/details');
    }

    return (
        <main>
            <h1>Click a pin to view details about it.</h1>
            <h3>Click the link above to add a new pin to your list.</h3>
            <section className="pins">
                {pins.map(pin => {
                    return (
                        <div key={pin.id} >
                            <h3>{pin.team}</h3>
                            <img src={pin.image_url} alt={pin.team} onClick={() => setPinDetails(pin)}/> 
                        </div>
                    );
                })}
            </section>
        </main>

    );

}

export default PinList;