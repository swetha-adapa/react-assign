import MovieTicket from "../movie-ticket/movie-ticket"
const MovieApp = ()=> {
    const movieData = [
        {
            name: "movie1",
            id:"movie-1",
            description: "Best Horror Movie"
        },
        {
            name: "movie2",
            id:"movie-2",
            description: "Best Comedy Movie"
        },
        {
            name: "movie3",
            id:"movie-3",
            description: "Best Action Movie"
        }
]
const buyTicket = (movieName)=>{
    console.log(movieName + "booked")
}
    return (
        <>
        <div>Movie App</div>
         {movieData.map((movie,i)=> {
             return <MovieTicket key={i} movieData={movie} buyTicket={buyTicket}/>
         })}
         {movieData.map((movie,i)=> {
             return <MovieTicket key={i} movieData={movie} buyTicket={buyTicket}/>
         })}
        
        </>
    )
}
export default MovieApp;