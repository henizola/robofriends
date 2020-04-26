import React from 'react'
import {connect} from 'react-redux';
import Card from './Card'
import './card-list.styles.css'

const CardList=({robots})=>{
 
    return (
        <div className='card-list'>
            {robots.map((robot,i)=>
    {
        return <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
    })}
        </div>

    );

}

const mapStateToProps=state=>({
    robots:state.robots.filterdRobot
})

export default connect (mapStateToProps)(CardList);