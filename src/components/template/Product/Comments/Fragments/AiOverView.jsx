import { BsStars } from "react-icons/bs";
import { LOREM_TEXT } from "../../../../../lib/constants";

const AiOverView = () => {
  return (
    <div className="mt-4">
      <div className="flex-itc gap-2">
        <div className="size-10 primary-border flex-center bg-[url('assets/ai-bg.svg')] bg-cover bg-center rounded-xl animate-pulse text-white  text-xl">
          <BsStars />
        </div>
        <div>
          <p className="text-base font-bold">خلاصه دیدگاه‌های خریدارها</p>
          <p className="text-xs text-style">تولید شده با هوش مصنوعی</p>
        </div>
      </div>
      <div className="mt-4 p-4 bg-[#D1C4E9]/20 rounded-lg">
        <p>{LOREM_TEXT}</p>
      </div>
    </div>
  );
};

export default AiOverView;
