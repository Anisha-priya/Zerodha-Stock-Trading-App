import React from 'react'


function RightSection({ imageURL,
    productName,
    productDescription,
    learnmore,}) {
    return ( 
    <div className="container mt-5">
        <div className="row">
           <div className="col-6 p-5 mt-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div>
            <a href={learnmore} >Learn more</a>
            </div>
            
           </div>
          <div className="col-6">
            <img src={imageURL}/>
    
          </div>
        </div>
    
      </div>
        
     );
}

export default RightSection;