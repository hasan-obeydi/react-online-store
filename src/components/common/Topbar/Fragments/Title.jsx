import { Link } from "react-router";

const Title = ({ title }) => {
  return (
    <Link to="/" className="text-xl lg:text-2xl font-bold hidden sm:block">
      <h1>{title}</h1>
    </Link>
  );
};

export default Title;
