import MagicCubes from "./three/MagicCubes";

export default function ProjectHeading() {
  return (
    <>
      <div className="relative">
  <div className="absolute inset-0 flex items-left justify-left pointer-events-none">
    <h1 className="text-[#cce7f6] sm:text-left md:text-left sm:2/3 md:w-1/2 lg:ml-4 px-8 text-3xl md:text-4xl lg:text-5xl py-12 title-font font-semibold hover:text-[#76BEF8] duration-300 mb-[-10] ">
      A few cool ideas that<br/> I've tried to bring to life.
    </h1>
  </div>
  <MagicCubes className="w-1 my-12 h-full" />
</div>

    </>
  );
}
