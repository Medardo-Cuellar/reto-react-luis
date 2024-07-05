function AsideButton ({ caption, onClick }) {
  return (
    <div className="hover:border-solid hover:border-2 hover:border-black hover:rounded-md p-2">
      <div className="w-full">
        <span className="hover:cursor-pointer">{caption}</span>
      </div>
    </div>
  );
}

export default AsideButton;