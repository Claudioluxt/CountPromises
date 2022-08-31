import React from 'react'
import styled from 'styled-components'


const Cart = (props) => {

  return (

    <div>
        <Carts>
            <button class="btn">
                  
                <span class="price"></span>
                <span class="shopping-cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg><p>{props.count} </p></span>
            </button>
        </Carts>
    </div>
   
  )
}

export default Cart

const Carts = styled.div`
.btn {
	background: #212121;
	border-radius: 5px;
    position: relative;
	border:  2 3 4 5;
	color: #fcfcfc;
	padding: 10px 15px ;
	margin: 1px;
	
}
p {
    color: #fcfcfc;
}

`