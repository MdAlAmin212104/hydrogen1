import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Link} from 'react-router';

export async function loader({request}: LoaderFunctionArgs) {
  const pathname = new URL(request.url).pathname;
  throw new Response(`The page "${pathname}" could not be found on our store.`, {
    status: 404,
  });
}

export default function CatchAllPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Decorative Icon */}
        <div className="mb-8">
          <svg 
            className="w-24 h-24 text-blue-400 mx-auto" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47.85-6.1 2.257M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>

        {/* Error Code */}
        <h1 className="text-9xl font-bold text-blue-600 mb-2">404</h1>
        
        {/* Main Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        
        {/* Custom Message */}
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          We couldn&apos;t find the page you&apos;re looking for. It might have been moved, 
          deleted, or perhaps you entered the wrong URL. Don&apos;t worry though - 
          our amazing collection is just a click away!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-center"
          >
            Return to Homepage
          </Link>
          <Link
            to="/collections/all"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium text-center"
          >
            Browse All Products
          </Link>
        </div>

        {/* Additional Help */}
        <p className="text-sm text-gray-500 mt-8">
          Need help?{' '}
          <Link to="/pages/contact" className="text-blue-600 hover:underline">
            Contact our support team
          </Link>
        </p>
      </div>
    </div>
  );
}

