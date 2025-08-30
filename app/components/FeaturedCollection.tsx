import { Link } from "react-router";

export function FeaturedCollection({ collection }: { collection: any }) {
  return (
    <div>
      <h1>this is collections name <Link to={`/collections/${collection?.handle}`}>{collection?.handle}</Link></h1>
    </div>
  );
}
