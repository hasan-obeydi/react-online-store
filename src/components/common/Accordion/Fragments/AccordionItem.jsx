import { FaAngleLeft } from "react-icons/fa";
import useToggle from "../../../../lib/hooks/useToggle";

const AccordionItem = (option) => {
  const [isAccordianOpen, setIsAccordian] = useToggle(false);
  return (
    <div>
      <div
        onClick={setIsAccordian}
        className="flex-between p-6 sm:p-8 hover:bg-blue-500/15 dark:hover:bg-blue-900/50 cursor-pointer duration-200"
      >
        <h3>{option.label}</h3>
        <FaAngleLeft className={isAccordianOpen && "-rotate-90 duration-150"} />
      </div>
      {isAccordianOpen && (
        <p className="leading-6 p-4 text-gray-500 line">
          {option.content}
        </p>
      )}
    </div>
  );
};

export default AccordionItem;
