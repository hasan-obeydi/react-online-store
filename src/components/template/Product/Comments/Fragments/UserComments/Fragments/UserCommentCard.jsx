import {
  DEFAULT_USER_IMAGE,
  LOREM_TEXT,
} from "../../../../../../../lib/constants";

const UserCommentCard = () => {
  return (
    <div className="box-style">
      <div className="flex-between flex-wrap gap-2">
        <div className="flex-itc gap-2">
          <div className="size-14 overflow-hidden rounded-full">
            <img src={DEFAULT_USER_IMAGE} />
          </div>
          <div>
            <p className="font-bold">کاربر ناشناس</p>
            <p className="text-xs text-style">example@gmail.com</p>
          </div>
        </div>
        <div>1405/05/10</div>
      </div>
      <div className="p-4">
        <p className="text-style">{LOREM_TEXT}</p>
      </div>
    </div>
  );
};

export default UserCommentCard;
