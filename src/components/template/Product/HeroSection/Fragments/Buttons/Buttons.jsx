import Share from "./Fragments/Share";
import GoToCommnets from "./Fragments/GoToCommnets";

const Buttons = () => {
  return (
    <div className="flex-itc justify-end gap-2">
      <Share />
      <GoToCommnets />
    </div>
  );
};

export default Buttons;
