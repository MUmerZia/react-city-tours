import React, { Component } from 'react'
import "./TourList.scss";
import Tour from "../Tour/Tour";
import {tourData} from"./Tourdata";
export default class TourList extends Component {

    state = {
        tours : tourData
    };


    render() {
        console.log("tourData====>>>",this.state.tours)
        const { tours} = this.state;
        return (
            <section className="tour-list">
               {
                   tours.map(tour=>{
                       return(
                           <Tour key={tour.id} tour={tour} />
                       )
                   })
               }

            </section>
        )
    }
}

