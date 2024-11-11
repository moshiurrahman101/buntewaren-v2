
function Hero() {
  return (
    <div className="lg:h-[70vh] md:h-[40vh] h-[30vh] flex justify-center items-center animate-fade-up animate-once animate-ease-linear" id="hero">
      <div className="w-[700px] text-center">
        <h1 className="lg:text-3xl md:text-2xl text-2xl font-bold">
        <span className="text-green-600">About</span> Us
        </h1>
        <p className="mt-5 lg:text-3xl md:text-3xl text-lg">
        Welcome to Bunte Waren!
        </p>
      </div>
    </div>
  );
}

export default Hero;
