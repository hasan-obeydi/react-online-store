import BoxTitle from "../../../common/BoxTitle/BoxTitle";
import ReadAll from "./Fragments/ReadAll";
import Text from "./Fragments/Text";

const Description = () => {
  return (
    <div className="box-style mt-8">
      <BoxTitle title={"توضیحات محصول"} />
      <Text />
      <ReadAll />
    </div>
  );
};

export default Description;
