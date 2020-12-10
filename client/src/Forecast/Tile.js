const Tile = ({ image, temp, bigItems, i }) => {
    return (
    <div>
        
        <img src={ image } alt={'weather_image'} style={{ width: '90%', marginLeft: '5%' }}></img>
        <ul>          
            <li>{temp ? "max:  " + Math.max(...temp) + "°F" : null}</li>
            <li>{temp ? "min:  " + Math.min(...temp) + "°F" : null}</li>
            <li className='description' >{bigItems ? bigItems[i][0]["forecast"][0] : null}</li> 
        </ul>
    </div>
    );
}

export default Tile;