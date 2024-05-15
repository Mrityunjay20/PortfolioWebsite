import { NavLink } from "react-router-dom";
import { resumeLink } from "../utils/links";

export default function NavBar() {

  const scrollToComponent = (componentId) => {
    const component = document.getElementById(componentId);
    if (component) {
      component.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="navbar"
      className="text-gray-600 bottom-30 body-font snap-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
    >
      <div className="mx-auto z-10 flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto md:mr-auto rounded-xl bg-gray-200 transition ease-in hover:delay-200 py-2 px-5 mt-8 flex flex-wrap items-center text-base justify-center">
          <NavLink
            exact
            to="/"
            activeClassName="text-blue-700 border-blue-700"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md hover:border-[#3765da] hover:text-[#3765da] text-black transition-all duration-500"
          >
            HOME
          </NavLink>
          <NavLink
            to="/experience"
            activeClassName="text-blue-700 border-blue-700"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-black hover:border-[#3765da] hover:text-[#3765da] transition-all duration-500"
          >
            EXPERIENCE
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="text-blue-700 border-blue-700"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-black hover:border-[#3765da] hover:text-[#3765da] transition-all duration-500"
          >
            PROJECTS
          </NavLink>
          <NavLink
            onClick={() => scrollToComponent("footer")}
            activeClassName="text-blue-700 border-blue-700"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-black hover:border-[#3765da] hover:text-[#3765da] transition-all duration-500"
          >
            CONTACT ME
          </NavLink>
          <NavLink
            to={resumeLink}
            activeClassName="text-blue-700 border-blue-700"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-black hover:border-[#3765da] hover:text-[#3765da] transition-all duration-500"
          >
            RESUME
          </NavLink>
        </nav>
      </div>
    </header>
  );
}


