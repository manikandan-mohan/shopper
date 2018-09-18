import React from 'react'
import '../Cart/CartPage.css'

function TotalPrice({ items }) {
    let amount = 0;
    if(items === undefined){
        return (<div>nothing</div>)
    }
    else{
    items.map((item) => {     
        for (var x = 1; x <= item.count; x++) {
          amount += item.price
        }
    })
    return (<div className='CartPage-totalPrice'>
        Total ${amount}
    </div>);
    }
}

export default TotalPrice;