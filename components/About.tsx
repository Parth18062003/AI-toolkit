import Phone from "./ui/floating-phone";

const About = () => {
    return (
      <section className="-translate-y-32 w-full px-8 py-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-6xl mx-auto">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
            Better every day
          </span>
          <h3 className="text-4xl md:text-6xl font-semibold">
            Let's change it up a bit
          </h3>
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-400 my-4 md:my-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
            error repellat voluptatibus ad.
          </p>
          <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
            Find a class
          </button>
        </div>
        <Phone />
      </section>
    );
  };

  export default About