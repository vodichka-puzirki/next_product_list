'use client';
import { useGetProducts } from '@/hooks/useGetProducts';
import { ProductCard } from '../ProductCard';

// import styles from './ProductList.module.scss';

const ProductList = () => {
  const products = useGetProducts();

  return products.map((product) => {
    return <ProductCard product={product} key={product.id} />;
  });
};

export default ProductList;
