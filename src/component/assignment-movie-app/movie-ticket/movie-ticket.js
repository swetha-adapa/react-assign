import "./movie-ticket.css";
const MovieTicket = (props)=> {
    return (
      <>
        <div className="card">
            <div className="container">
                <h4><b>{props.movieData.name}</b></h4> 
                <p>{props.movieData.description}</p> 
            </div>
            <button onClick={()=>{props.buyTicket(props.movieData.name)}}>BuyNow</button>
        </div>
      </>
    )
}
export default MovieTicket;