import {Suspense} from 'react';
import {Await} from 'react-router';
import {ProductItem} from './ProductItem';

export function AllProducts({products}: {products: Promise<any>}) {
  return (
    <div className="collection-products">
      <h2 className="bg-blue-500 text-white p-10">All Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div className="recommended-products-grid">
              {response
                ? response.products.nodes.map((product: any) => (
                    <ProductItem key={product.id} product={product} />
                  ))
                : null}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}
