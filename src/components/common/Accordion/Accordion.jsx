import AccordionItem from "./Fragments/AccordionItem";

const Accordion = ({ options }) => {
  return (
    <div className="primary-border rounded-xl flex flex-col *:flex-1 divide-y divide-gray-200 dark:divide-gray-700 overflow-hidden">
      {options.map((option) => (
        <AccordionItem key={option.id} {...option} />
      ))}
    </div>
  );
};

export default Accordion;
