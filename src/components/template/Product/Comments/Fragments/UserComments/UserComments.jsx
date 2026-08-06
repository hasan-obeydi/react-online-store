import MoreCommentsButton from "./Fragments/MoreCommentsButton";
import UserCommentCard from "./Fragments/UserCommentCard";

const UserComments = () => {
  return (
    <div className="flex-4">
      <div className="space-y-5">
        {Array.from({ length: 3 }).map(() => (
          <UserCommentCard />
        ))}
      </div>
      <MoreCommentsButton />
    </div>
  );
};

export default UserComments;
