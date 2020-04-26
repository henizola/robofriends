import React from 'react';
import {connect} from 'react-redux';
import {search} from '../redux/search/search.action';

const SearchBox=({searchField})=>{


const dispatchInput=event=>searchField(event.target.value);

    return(
        <div className='pa2'>
                <input className='pa3 ba b--green bg-lightest-blue'
                 type='search' placeholder='search' onChange =  {dispatchInput}/>
                
    
        </div>
        );
        
}

const mapDispatchToProps=dispatch=>({
        searchField:input=>dispatch(search(input))
})

export default connect(null,mapDispatchToProps)(SearchBox);