import React from 'react';
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'
import './App.css';
import {connect} from 'react-redux';
import {filterRobot} from '../redux/robots/robots.action'


const App =({searchfield,allRobots,filterRobot})=>
{

        const filteredRobots = allRobots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        filterRobot(filteredRobots);
        return(
            <div className='tc'>
                      <h1 className='f2'>RoboFriends</h1>
                        <SearchBox/> 
                         <Scroll >
                             <CardList />
                         </Scroll> 
               </div>
          
        );
     
    }
    
const mapDispatchToProps=dispatch=>({
    filterRobot:robot=>dispatch(filterRobot(robot))
})

const mapStateToProps=state=>({
    searchfield:state.search.search,
    allRobots:state.robots.allRobots
})
export default connect(mapStateToProps,mapDispatchToProps)(App);