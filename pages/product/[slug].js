import { useRouter } from 'next/router';
import React from 'react';
import Layout from './../../components/Layout';
import data from './../../utils/data';
import Image from 'next/image';
const productScreen = () => {
  const { query } = useRouter();
  const { slug } = query;
  console.log(slug);
  const product = data.products.find((x) => x.slug === slug);
  console.log(product);
  if (!product) {
    return <div>not find 404</div>;
  }
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
          <button className="primary-button w-full">Add to cart</button>
        </div>
      </div>
    </Layout>
  );
};
export default productScreen;
