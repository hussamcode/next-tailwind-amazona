import type { NextPage } from 'next';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import data from '../utils/data';

const Home: NextPage = () => {
  return (
    <Layout title="amozon">
      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem productse={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
