// import { useGetAllProductsQuery } from "../../redux/features/product/productApi";

import { useGetAllProductsQuery } from "../../redux/features/product/productApi";


const ProductTest = () => {
      const {data}=useGetAllProductsQuery('');
      console.log(data)

      return (
            <div>
                <h1>This is product</h1>  
            </div>
      );
};

export default ProductTest;