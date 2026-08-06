import BoxTitle from "../../../common/BoxTitle/BoxTitle";
import AiOverView from "./Fragments/AiOverView";
import CommentForm from "./Fragments/CommnetForm";
import UserComments from "./Fragments/UserComments/UserComments";

const Comments = () => {
  return (
    <section className="box-style mt-8">
      <BoxTitle title={"نظرات کاربران"} />
      <AiOverView />
      <div className="flex flex-col-reverse md:flex-row gap-x-4 gap-y-8 mt-8">
        <CommentForm />
        <UserComments />
      </div>
    </section>
  );
};

export default Comments;
