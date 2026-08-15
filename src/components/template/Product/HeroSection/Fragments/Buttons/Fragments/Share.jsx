import { FaShare } from "react-icons/fa";
import Tooltip from "../../../../../../Ui/Tooltip";
import { useState } from "react";

const Share = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyUrl = async () => {
    const origin = location.origin;
    const pathName = location.pathname;
    const url = origin + pathName;
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    await setTimeout(() => {
      setIsCopied(false);
    }, [1500]);
  };
  return (
    <Tooltip text={isCopied ? "لینک کپی شد !" : "اشتراک گذاری"}>
      <button
        onClick={copyUrl}
        className="size-9 primary-border rounded-lg flex-center cursor-pointer duration-200 *:duration-200 dark:hover:bg-gray-700 hover:bg-gray-200"
      >
        <FaShare className="text-xl active:text-sm" />
      </button>
    </Tooltip>
  );
};

export default Share;
