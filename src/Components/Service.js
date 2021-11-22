import React from 'react';
import Card from './Card';



const Service = () =>{
    return(
        <>
            <h1 className="text-center mt-4">Our Services</h1>
            <div className="card-div">
                <Card title="Web Development"/>
                <Card title="App Development"/>
                <Card title="SEO Development"/>
                <Card title="UI UX Design"/>
                <Card title="Digital Marketing"/>
                <Card title="Photo Editing"/>
                <Card title="Video Editing"/>
               
            </div>



        </>
    )
}


export default Service;