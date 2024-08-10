function Tag({ text, color }) {
  return (
    <p className="rounded-3xl bg-coal mr-4 cursor-default">
      <span className={`block w-full h-full bg-${color} border border-coal px-3 py-1.5 rounded-3xl text-sm transition-all duration-300 -translate-x-1 -translate-y-1`}>
        {text}
      </span>
    </p>
  );
}

export default Tag;
