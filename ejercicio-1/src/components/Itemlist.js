import React from 'react';
import Item from './Item';
import '../App.css';

class Itemlist extends React.Component {
  render() {
    const items = this.props.items;

    return (
      <ul className="item-list">
        {items.map((list) =>{
          return(
            <li>
            <Item
              name = {list.name}
              description = {list.description}
              quantity = {list.quantity}
              category = {list.category}
              price = {list.price}
             />
            </li>
          )
        })}
      </ul>
    )}
}

export default Itemlist;
