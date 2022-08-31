import React, { useEffect } from 'react'
import { useState } from 'react'
import promises from '../utils/promises' 
import {data} from '../utils/data'
import ItemList from './ItemList'



const ItemListConteiner = (props) => {

    const [producto,setProducto] = useState([]);

    //componenstDidMount
    
    useEffect (() => {
      //USAR LA PROMESA
      promises(data)
      .then(result => setProducto(result))
      .catch(err => console.log(err))
    }, [])
    
  return (
    
     <>
       <ItemList items={producto} /> 
        
     </>
  )
}

export default ItemListConteiner

