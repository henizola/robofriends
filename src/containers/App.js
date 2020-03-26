import React from 'react';
import CardList from '../components/CardList'
import { robots } from '../components/robots'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'
import './App.css';



class App extends React.Component
{

    constructor()
    {
        super();
        this.state={
            robots: robots,
            searchfield:'',
        }
    } 
    onSearchChange=(event)=>
    {
        this.setState({searchfield: event.target.value  })
    console.log(event.target.value);
      
    //    console.log(filteredRobots)
    }
    
    render(){
        const {robots,searchfield}=this.state;
        const filteredRobots = robots.filter(robots=>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return(
            <div className='tc'>
                      <h1 className='f2'>RoboFriends</h1>
                      <SearchBox searchChange={this.onSearchChange}/>
                      <hr/> 
           <Scroll >
           <CardList robots= {filteredRobots} />
            
               </Scroll> 
               </div>
          
        );
     
    }
    }
export default App;