import Modal from "./Modal";
import { useState } from "react";

const Tile = ({ image, temp, bigItems, i }) => {

    const [state, setState] = useState({show: false});

    const showModal = () => {
        this.setState({ show: true });
    };

    const hideModal = () => {
        setState({ show: false });
    };

    return (
        <>
            <Modal show={state.show} handleClose={hideModal}>
                <p>Modal</p>
                <p>Data</p>
            </Modal>
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