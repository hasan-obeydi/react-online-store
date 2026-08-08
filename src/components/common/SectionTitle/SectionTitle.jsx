const SectionTitle = ({ title, description }) => {
  return (
    <div>
      <div className="flex-itc gap-2">
        <div className="h-5 bg-blue-500 w-2 rounded-2xl bg-linear-to-b from-sky-500 to-indigo-500"></div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default SectionTitle;
