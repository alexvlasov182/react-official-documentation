const products = [
  {title: 'Cabbage', id: 1, isFruit: false,},
  {title: 'Garlic', id: 2, isFruit: false},
  {title: 'Apple', id: 3, isFruit: true},
];


export default  function ShoppingList() {
  const listItems = products.map(product =>
    <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}>
      {product.title}
    </li>
  );

  return(
      <ul>{listItems}</ul>
  )
}
