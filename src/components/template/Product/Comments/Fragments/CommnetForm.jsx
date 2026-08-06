const CommentForm = () => {
  return (
    <form className="box-style flex-2 bg-gray-100 dark:bg-gray-800 space-y-3 h-fit sticky top-5">
      <div>
        <label htmlFor="name">نام شما : </label>
        <input
          className="input-style mt-2"
          id="name"
          type="text"
          placeholder="مثال : حسن عبیدی"
          required
        />
      </div>
      <div>
        <label className="" htmlFor="email">
          پست الکترونیکی :
        </label>
        <input
          className="input-style mt-2"
          id="email"
          type="email"
          placeholder="mohamadhasanobeydipoor@gmail.com"
          required
        />
      </div>
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
