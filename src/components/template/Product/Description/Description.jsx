import BoxTitle from "../../../common/BoxTitle/BoxTitle";
import ReadAll from "./Fragments/ReadAll";
import Text from "./Fragments/Text";

const Description = () => {
  return (
    <div className="pt-5">
      <div className="section-style">
        <BoxTitle title={"توضیحات محصول"} />
        <Text />
        <ReadAll />
      </div>
    </div>
  );
};

export default Description;
