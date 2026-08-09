import { FaComments } from "react-icons/fa";
import { Link, useLocation } from "react-router";
import Tooltip from "../../../../../../Ui/Tooltip";
import { useEffect } from "react";

const GoToCommnets = () => {
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location]);
  return (
    <Tooltip text={"رفتن به نظرات"}>
      <Link
        to="#product-comments"
        className="size-9 primary-border rounded-lg flex-center cursor-pointer duration-200 *:duration-200 dark:hover:bg-gray-700 hover:bg-gray-200"
      >
        <FaComments className="text-xl active:text-sm" />
      </Link>
    </Tooltip>
  );
};

export default GoToCommnets;
