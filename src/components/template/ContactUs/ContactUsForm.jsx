import { useState } from "react";
import InputField from "../../common/Input/InputField";
import axios from "axios";
import { toast } from "sonner";
import clsx from "clsx";
import contactUsSchema from "../../../validators/contact-us";
import validate from "../../../validators";

const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    content: "",
  });

  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const clearInputs = () => {
    setFormData({
      name: "",
      phone: "",
      subject: "",
      content: "",
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (validate(contactUsSchema, formData)) {
      setIsLoading(true);
      const response = axios.post(
        "https://shopino.iran.liara.run/v1/contact-us",
        formData,
      );
      await toast.promise(response, {
        loading: () => {
          return "در حال ارسال پیام...";
        },
        success: () => {
          clearInputs();
          setIsLoading(false);
          return "پیام شما با موفقیت ارسال شد.";
        },
        error: (error) => {
          setIsLoading(false);
          if (error.response?.status === 400) {
            return "لطفا مقادیر را به درستی وارد کنید.";
          } else {
            return "پیام شما ارسال نشد.";
          }
        },
      });
    }
  };
  return (
    <form onSubmit={submitHandler} className="max-w-150 p-4">
      <p className="text-style text-sm">
        کاربر محترم, برای پاسخگویی بهتر لطفا تمامی فیلد های زیر را تکمیل کنید.
      </p>
      <div className="space-y-4 mt-6">
        <div className="flex flex-col xs:flex-row gap-x-2 gap-y-4">
          <InputField
            value={formData.name}
            label={"نام و نام خانوادگی"}
            onChange={changeHandler}
            type={"text"}
            name={"name"}
            placeholder={"مثال : محمد حسن عبیدی پور"}
            required
          />
          <InputField
            value={formData.phone}
            label={"شماره موبایل"}
            onChange={changeHandler}
            type={"text"}
            name={"phone"}
            maxLength={11}
            placeholder={"مثال : 09000000000"}
            required
          />
        </div>
        <InputField
          value={formData.subject}
          label={"موضوع"}
          onChange={changeHandler}
          type={"text"}
          name={"subject"}
          placeholder={"مثال : مرجوع کردن محصول"}
          required
        />
        <div>
          <label htmlFor="textarea">توضیحات :</label>
          <textarea
            className="input-style mt-2 max-h-40 min-h-10"
            value={formData.content}
            onChange={changeHandler}
            name="content"
            id="textarea"
            placeholder="مثال : قصد مرجوع کردن محصول با شناسه #124667 را دارم."
            required
          ></textarea>
        </div>
      </div>
      <div className="flex-itc gap-2 justify-end mt-6">
        <button
          onClick={clearInputs}
          type="button"
          className="border border-gray-400 rounded-lg py-2 px-4 cursor-pointer hover:opacity-80 duration-200 active:scale-90"
        >
          انصراف
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className={clsx("primary-button active:scale-90 px-6!", {
            disable: isLoading === true,
          })}
        >
          {isLoading ? "در حال ارسال..." : "ثبت و ارسال"}
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
