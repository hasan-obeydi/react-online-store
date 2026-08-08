const Form = () => {
  return (
    <form className="max-w-150 p-4">
      <p className="text-style text-sm">
        کاربر محترم, برای پاسخگویی بهتر لطفا تمامی فیلد های زیر را تکمیل کنید.
      </p>
      <div className="space-y-4 mt-6">
        <div className="flex flex-col xs:flex-row gap-x-2 gap-y-4">
          <div>
            <label htmlFor="name">نام و نام خانوادگی :</label>
            <input
              className="input-style mt-2"
              id="name"
              type="text"
              placeholder="مثال : حسن عبیدی"
              required
            />
          </div>
          <div>
            <label htmlFor="name">شماره موبایل :</label>
            <input
              className="input-style mt-2"
              id="name"
              type="text"
              placeholder=" مثال : 09000000000"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="name"> پست الکترونیکی :</label>
          <input
            className="input-style mt-2"
            id="name"
            type="email"
            placeholder="mohamadhasanobeydipoor@gmail.com"
            required
          />
        </div>
        <div>
          <label htmlFor="name"> موضوع :</label>
          <input
            className="input-style mt-2"
            id="name"
            type="text"
            placeholder="مثال : مرجوع کردن محصول"
            required
          />
        </div>
        <div>
          <label htmlFor="textarea">توضیحات :</label>
          <textarea
            className="input-style mt-2 max-h-40 min-h-10"
            name="description"
            id="textarea"
            placeholder="مثال : قصد مرجوع کردن محصول با شناسه #124667 را دارم."
            required
          ></textarea>
        </div>
      </div>
      <div className="flex-itc gap-2 justify-end mt-6">
        <button
          type="button"
          className="border border-gray-400 rounded-lg py-2 px-4 cursor-pointer hover:opacity-80 duration-200"
        >
          انصراف
        </button>
        <button type="submit" className="primary-button px-6!">
          ثبت و ارسال
        </button>
      </div>
    </form>
  );
};

export default Form;
