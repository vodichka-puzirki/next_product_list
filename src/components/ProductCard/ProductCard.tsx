import { ProductType } from '@/types/store';

import styles from './styles.module.scss';

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.product}>
      <div>{product.title}</div>
      <div>{product.description}</div>
      <div>{product.price}</div>
    </div>
  );
};

export default ProductCard;
