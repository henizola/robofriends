import React from 'react';
import './card-list.styles.css'
const Card =({name,email,id})=>
{
    return( 
        <div className ='tc  bg-light-green dib br4 pa3 mar2 grow bw4 flex4 shadow-5 card'>
           
             <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
             <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        </div>
       

    );
}

export default Card;