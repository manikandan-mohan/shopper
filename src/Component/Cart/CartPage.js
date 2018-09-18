import React from 'react'
import PropTypes from 'prop-types';
import './CartPage.css'
import Item from '../Item/Item'
import TotalPrice from '../TotalPrice/TotalPrice';

function CartPage({ items, onAddOne, onRemoveOne }) {

    if (items.length === 0) {
        return <div>
            <h2 className='default-message'>Your Cart is Empty. <br />
                <p className='default-message'>Why not add some expensive products to it?</p>
            </h2>
        </div>
    }
    return (
        <div>
            <ul className="CartPage-items">
                {items.map(item =>
                    <li key={item.id} className="CartPage-item">
                        <Item item={item}>
                            <div className="CartItem-controls">
                                <button
                                    className="CartItem-removeOne"
                                    onClick={() => onRemoveOne(item)}>&ndash;</button>
                                <span className="CartItem-count">{item.count}</span>
                                <button
                                    className="CartItem-addOne"
                                    onClick={() => onAddOne(item)}>+</button>
                            </div>
                        </Item>
                    </li>
                )}
            </ul>
            <TotalPrice items={items} />
        </div>
    );
}

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
};
export default CartPage;