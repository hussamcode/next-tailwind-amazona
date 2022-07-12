import Link from 'next/link';

const ProductItem = ({ productse }) => {
  return (
    <div className="card">
      <Link href={`product/${productse.slug}`}>
        <a>
          <img
            src={productse.image}
            alt={productse.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`product/${productse.slug}`}>
          <a>
            <h2 className="text-lg">{productse.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{productse.brand}</p>
        <p>${productse.price}</p>
        <button className="primary-button">Add ti Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
