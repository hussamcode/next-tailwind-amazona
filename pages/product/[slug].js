import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Layout from './../../components/Layout';
import data from './../../utils/data';
import Image from 'next/image';
import { Store } from '../../utils/Store';
const productScreen = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>not find 404</div>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.items.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (quantity > product.countInStock) {
      alert('Sorry. Product is out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  };
  return (
    <Layout title={product.name}>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt="not found"
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div className="p-2">
          <ul>
            <li>{product.name}</li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews}
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div className="card p-5">
          <div className="flex justify-between mb-2">
            <p>Pice</p>
            <p>${product.price}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Status</p>
            <p>${product.countInStock > 0 ? 'In stock' : 'Unavailable'}</p>
          </div>
          <button className="primary-button w-full" onClick={addToCartHandler}>
            Add to cart
          </button>
        </div>
      </div>
    </Layout>
  );
};
export default productScreen;
