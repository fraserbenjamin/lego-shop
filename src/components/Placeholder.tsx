

const Placeholder = () => (
  <div className="w-screen h-screen p-24 bg-neutral-100 relative flex flex-col justify-center">
    <div className="border-2 border-neutral-200 w-full h-full flex justify-center place-items-center">
      <div className="flex flex-col text-center space-y-5">
        <h1 className="text-3xl">It's looking empty in here!</h1>
        <h2 className="text-lg">Open the README.md to get started.</h2>
      </div>
    </div>
  </div>
);

export default Placeholder;