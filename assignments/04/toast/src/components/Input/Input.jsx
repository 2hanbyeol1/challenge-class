function Input({ type = "text", label, name }) {
  return (
    <div className="flex flex-col gap-y-1.5">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        className="w-full px-4 py-2.5 rounded-md border border-gray-200"
        type={type}
        name={name}
      />
    </div>
  );
}

export default Input;
