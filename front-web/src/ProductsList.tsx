import ProductsCard from "./Orders/ProductCard";
import { Product } from "./Orders/types";

type Props = {
    products: Product[];
}

function ProductsList({ products } : Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
          {products.map(product => (
              <ProductsCard key={product.id} product={product}/>
          ))}

      </div>
    </div>
  );
}

export default ProductsList;
