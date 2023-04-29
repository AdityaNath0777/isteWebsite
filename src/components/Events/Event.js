const Event = (props) => {
    return (
      <div className="event-indie" style={{width:'80%', margin:'auto 100px', color:'white'}} >
        <p>{props.key}</p>
        <p>{props.name}</p>
        <p>{props.about}</p>
      </div>
    );
  };
  
  export default Event;