import React from 'react'
import {Link} from "react-router-dom"
import data from './data'
import Empdata from './Empdata'

const Empdetails = () => {
    return (
        <div className="container">
            <h3>Today's Birthday</h3>
            <Empdata employee={data}/>
            <Link to="/empdetails">Employee Details</Link>
        </div>
    )
}

export default Empdetails
