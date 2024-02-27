import PropTypes from 'prop-types';
import './Station.css'


function Station({station}) {

   
    return (
      <>
     <div className="container">
        <h3>
            Station Number: {station.id}
        </h3>
        <h4>
            city: {station.city}
        </h4>
        <p>street: {station.street}</p>
            <div>
      <h5>Line_In_Station:</h5>
      
        {station.busLine.map((l, i) => (
          <span key={i} value={l}>{l},</span>
        ))}
      
     </div> 
        
        
     </div>
      
    
      </>
    )
  }
  Station.propTypes = {
    station: PropTypes.shape({
      id: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      busLine: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    }).isRequired,
  };
  
  
  export default Station
