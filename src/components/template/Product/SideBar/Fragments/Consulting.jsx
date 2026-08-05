import { FiPhoneCall } from "react-icons/fi";

const Consulting = () => {
  return (
    <div className="flex-itc justify-between text-gray-500 dark:text-gray-400">
      <div className="text-sm">
        <p>برای مشاوره خرید این کالا با شماره:</p>
        <span className="mt-1 block"> 021-2122211</span>
      </div>
      <FiPhoneCall className="text-2xl" />
    </div>
  );
};

export default Consulting;
