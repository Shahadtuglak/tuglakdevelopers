import React from "react";
import { Link } from "react-router-dom";


const Card = (props) =>{
    const img = "https://media.istockphoto.com/photos/professional-developer-programmer-cooperation-meeting-and-and-in-picture-id1253430957?b=1&k=20&m=1253430957&s=170667a&w=0&h=OmsDttwIpXtQJGwqfB7Qv5HElbPaUMW4KPpv51h0emg=";
    return(
        <>
         <div className="my-5">
            <div className="card">
                <img src={img} className=" card-img card-img-top" alt="CardImg"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Best in Class Experiece</p>
                    <Link to="/service" className="btn btn-primary">Explore More</Link>
                </div>
             </div>
</div>




        </>
    )


}


export default Card;