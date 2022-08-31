import Item from "./Item";

export default function ItemList(props) {

    let items = props.items;
  
    return(
      <div >
          <div>
            {items.map((item) => (
              <Item
              name = {item.name}
              imige= {item.imige}
              price = {item.price}
              agregar = {item.agragar}
              sacar = {item.sacar}
              categoryId = {item.categoryId}  
              stock = {item.stock}
              min= {item.min}
              />
            ))}
          </div>
      </div>
    );
  }

