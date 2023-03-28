import Loader from "../shared/Loade";
import { useProductsContext } from "../../context/ProductsContect";
import { useFilterContext } from "../../context/FilterProductsContext";
import GridView from "./productsView/GridView";
import ListView from "./productsView/ListView";
import EmptyView from "./productsView/EmptyView";
const ProductsList = () => {
  const { products, filteredProducts, grid_view } = useFilterContext();
  const { isProductsLoading } = useProductsContext();
  if (isProductsLoading) return <Loader />;
  if (filteredProducts.length < 1) return <EmptyView />;
  return (
    <section>
      {grid_view ? (
        <GridView products={filteredProducts} />
      ) : (
        <ListView products={filteredProducts} />
      )}
    </section>
  );
};

export default ProductsList;
