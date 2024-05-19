import MagicCubes from "./three/MagicCubes";

export default function ProjectHeading() {
  return (
    <>
      <div className="relative cursor-crosshair caret-red-500">
  <div className="absolute inset-0 flex items-left justify-left pointer-events-none">
    <h1 className="text-[#cce7f6] sm:text-left md:text-left sm:2/3 md:w-1/2 lg:ml-4 px-8 text-3xl md:text-4xl lg:text-5xl py-12 title-font font-semibold hover:text-[#76BEF8] duration-300 mb-[-10] ">
      A few cool ideas that<br/> I've tried to bring to life.
    </h1>
  </div>
  <MagicCubes className="relative w-1 my-12 h-full cursor-crosshair" />
  <div className="hidden sm:hidden md:block relative left-0 top-0 mb-4 mr-6 pointer-events-none">
  <h1 className="text-[#cce7f6] text-xs md:text-right lg:text-base py-2 title-font font-mono  duration-300">
    Right Click and drag to rotate, Left click (2 finger on mac)  to drag (follows cursor)
  </h1>
</div>
</div>

    </>
  );
}
