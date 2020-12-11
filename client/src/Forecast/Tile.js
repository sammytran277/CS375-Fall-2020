import Modal from "./Modal";
import { useState } from "react";

const Tile = ({ day, data, image, temp, bigItems, i }) => {

    const [state, setState] = useState(false);

    const showModal = () => {

        setState(true);
    };

    const hideModal = () => {
        setState(false);
    };

    return (
        <>
            <Modal day={ day } data={ data } show={state} handleClose={hideModal}></Modal>
            <div>
                <img src={ image } alt={'weather_image'} style={{ width: '90%', marginLeft: '5%' }} onClick={showModal}></img>
                <ul>          
                    <li>{temp ? "max:  " + Math.max(...temp) + "°F" : null}</li>
                    <li>{temp ? "min:  " + Math.min(...temp) + "°F" : null}</li>
                    <li className='description' >{bigItems ? bigItems[i][0]["forecast"][0] : null}</li> 
                </ul>
            </div>
        </>
    );
}

export default Tile;