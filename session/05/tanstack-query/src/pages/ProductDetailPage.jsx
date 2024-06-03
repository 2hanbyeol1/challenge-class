import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

function ProductDetailPage() {
  const params = useParams();
  const productId = params.productId;

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", { id: productId }],
    queryFn: () => api.products.getProduct(productId),
  });

  console.log(product);

  if (isLoading) return <Page>loading...</Page>;
  if (isError) return <Page>error...</Page>;

  return <Page>{product.name}</Page>;
}

export default ProductDetailPage;
