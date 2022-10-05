import React from 'react';
import ListItem from './ListItem';

const List = () => {
    let products = data
}

return (
<div>
    <h1>Products</h1>
    {products.map((product,i)=> {
        return <ListItem product={product} key={product.id}></ListItem>

    })}
</div>

)

export default List