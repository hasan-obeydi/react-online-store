import InputField from "../../../../common/Input/InputField";

const CommentForm = () => {
  return (
    <form className="box-style flex-2 bg-gray-100 dark:bg-gray-800 space-y-3 h-fit sticky top-5">
      <InputField
        label={"نام و نام خانوادگی"}
        type={"text"}
        name={"name"}
        placeholder={"مثال : محمد حسن عبیدی پور"}
        required
      />
      <InputField
        label={"پست الکترونیکی"}
        type={"email"}
        name={"email"}
        placeholder={"mohamadhasanobeydipoor@gmail.com"}
        required
      />
      <div>
        <label htmlFor="textarea">توضیحات :</label>
        <textarea
          className="input-style mt-2 max-h-40 min-h-10"
          name="description"
          id="textarea"
          required
        ></textarea>
      </div>
      <button className="primary-button w-full!" type="submit">
        ثبت نظر
      </button>
    </form>
  );
};

export default CommentForm;
