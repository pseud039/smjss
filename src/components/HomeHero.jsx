import { Link } from "react-router-dom";
import BG from "../assets/BG Image.png";

export default function HomeHero() {
  return (
    <section className="min-h-screen flex shadow-3xl">
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat -mt-[18px]"
        style={{ backgroundImage: `url(${BG})` }}
      >
        {/* Hero Content */}
        <div className="max-w-4xl mt-16 sm:mt-20 md:mt-24 lg:mt-32 mx-4 sm:mx-8 sm:mt-13 md:mx-12 lg:mx-16">
          <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-[Roboto] mb-8 sm:mb-12">
            Inclusive care for children with special needs
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16">
            <Link to="/whatwedo" className="flex-1 sm:flex-none">
              <button className="btn-secondary w-full sm:w-auto px-6 py-3 hover:cursor-pointer hover:shadow-xl/20">
                What We Do
              </button>
            </Link>
            <Link to="/donate" className="flex-1 sm:flex-none">
              <button className="btn-supportus w-full sm:w-auto px-6 py-3 hover:inset-shadow-white-500">
                Support Us
              </button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 right-0 px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="text-white text-base sm:text-lg font-semibold">
            {/* Mobile Layout */}
            <div className="flex flex-col sm:hidden gap-4">
              <div className="text-center">200+ children in our care</div>
              <div className="h-[1px] bg-white w-full"></div>
              <div className="text-center">1946 Girls trained</div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center justify-center gap-4">
              <div>200+ children in our care</div>
              <div className="h-[1px] bg-white flex-1 max-w-xs md:max-w-md lg:max-w-lg"></div>
              <div>1946 Girls trained</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
