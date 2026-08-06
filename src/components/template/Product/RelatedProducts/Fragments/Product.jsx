import { Link } from "react-router";

const ProductCard = (product) => {
  return (
    <Link
      to="/product"
    >
      <div className="w-30 mx-auto">
        <img
          className="object-cover w-full"
          src={product.image}
          alt={product.title}
        />
      </div>
      <h3 className="mt-4 text-sm font-bold">{product.title}</h3>
      <div className="mt-4">
        <div className="text-left text-sm">
          <span className="font-bold">
            {product.price.toLocaleString("fa-IR")}
          </span>{" "}
          <span className="text-gray-500">تومان</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
