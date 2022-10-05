

const ListItem = (props) => {
    const product = props.product

    return (
        <div>
            <h3>{product.title}</h3>
            <img srcSet={product.image}/>
        </div>
    )
};

export default ListItem