import {useEffect, useState} from 'react';
import ListItem from './ListItem';

const ProductList = () => {
        
    const [products, setProducts] = useState()
    useEffect(() => {
        
        const fetchData = async() => {
        const response = await fetch('https://fakestoreapi.com/products/1');
        const data = await response.json()
        console.log('singleFetch',data)
        setProducts(data)
    }
    fetchData()
},[])

return (
<div>
    <h1>Products</h1>
    {/* {products.map((product,i)=> {
        return <ListItem product={product} key={product.id}></ListItem> */}
</div>

)

export default List