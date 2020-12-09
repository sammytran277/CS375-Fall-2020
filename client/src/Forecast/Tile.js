const Tile = ({ cloud, temp, bigItems, i }) => {
    return (
    <div>
        
        <img src={ cloud } alt={'cloud'} style={{ width: '90%', marginLeft: '5%' }}></img>
        <ul>          
            <li>{temp ? "max:  " + Math.max(...temp) : null}</li>
            <li>{temp ? "min:  " + Math.min(...temp) : null}</li>
            <li>{bigItems ? bigItems[i][0]["forecast"][0] : null}</li> 
        </ul>
    </div>
    );
}

export default Tile;