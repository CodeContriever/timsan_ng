import React, { useState } from 'react';

const PasswordInput = ({ name, label, value, onChange, required, labelClasses, inputClasses }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative rounded-lg">
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>

      <div className="relative bg-white rounded-lg">
        <input
          type={showPassword ? 'text' : 'password'}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${inputClasses} pr-10`} // Add padding for the eye icon
        />
        <button
          type="button"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? '👁️' : '👁️'} {/* Eye icon */}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
