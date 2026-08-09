const InputField = ({
  label,
  value,
  type,
  //   name,
  placeholder,
  isRequired,
  maxLength,
}) => {
  const uniqueId = crypto.randomUUID();
  return (
    <div className="">
      <label className="label" htmlFor={uniqueId}>
        {label} {":"}
      </label>
      <input
        className="input-style mt-2"
        id={uniqueId}
        maxLength={maxLength ?? null}
        type={type ?? "text"}
        value={value}
        placeholder={placeholder ?? "لطفا این فیلد را تکمیل نمایید."}
        required={isRequired ?? true}
      />
    </div>
  );
};

export default InputField;
