const InputField = ({
  label,
  value,
  type,
  placeholder,
  name,
  isRequired,
  maxLength,
  onChange,
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
        onChange={onChange}
        maxLength={maxLength ?? null}
        type={type ?? "text"}
        value={value}
        name={name}
        placeholder={placeholder ?? "لطفا این فیلد را تکمیل نمایید."}
        required={isRequired ?? true}
      />
    </div>
  );
};

export default InputField;
