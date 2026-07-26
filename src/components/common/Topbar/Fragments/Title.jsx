import { Link } from "react-router";

const Title = ({ title }) => {
  return (
    <Link to="/" className="text-xl font-bold hidden sm:block">
      {title}
    </Link>
  );
};

export default Title;
