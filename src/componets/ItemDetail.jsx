import React from "react";


const ItemDetail= ({item})=> {

  
  return(
    <div >
        <div>
          
          
           <title>{item.name}</title>
           <desc>{item.categoryId}</desc> 
           <img  src={item.imige}></img> 
            <h3>{item.price}</h3>
            <h4>stock = {item.stock}</h4>
          
        </div>
    </div>
  );
}


export default ItemDetail
