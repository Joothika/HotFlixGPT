import React from "react";

const InputBox = ({
  type,
  placeholder,
  specify,
  reference,
  onChange,
  value,
  required,
}) => {
  const baseClass =
    "w-full  sm:w-[320px] h-12 rounded-sm indent-4 border-none outline-none focus:shadow-lg focus:shadow-white/20 placeholder:text-red-100/70";
  const transparentColor = "bg-transparent outline-white/30";
  const transparentClass = `${baseClass} ${transparentColor} `;
  if (required)
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={transparentClass}
        ref={reference}
        defaultValue={value || ""}
        onChange={onChange}
        required
      />
    );

  if (specify === "transparent")
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={transparentClass}
        ref={reference}
        defaultValue={value || ""}
        onChange={onChange}
      />
    );
  return null;
};

export default InputBox;
