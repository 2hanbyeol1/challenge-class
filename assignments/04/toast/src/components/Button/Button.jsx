function Button({ text }) {
  return (
    <button className="w-full py-3 rounded-md bg-black hover:bg-black/80 text-sm text-white">
      {text}
    </button>
  );
}

export default Button;
