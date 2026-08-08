import { Link } from "react-router";

const Actions = () => {
  return (
    <div className="mt-8 flex-center flex-wrap gap-4">
      <button className="primary-button">مشاهده محصولات</button>
      <Link to="/" className="button">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export default Actions;
