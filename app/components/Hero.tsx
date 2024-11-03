import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="h-[70vh] flex justify-center items-center animate-fade-up animate-once animate-ease-linear" id="hero">
      <div className="w-[700px] text-center">
        <h1 className="lg:text-3xl md:text-2xl text-2xl font-bold">
          High-Quality <span className="text-green-600">Jute Bags</span> in
          Europe
        </h1>
        <p className="text-[20px] mt-5">
          Discover Buntewaren&apos;s stylish, sustainable jute bags imported
          directly from Bangladesh. Perfect for the eco-conscious European
          shopper. Shop now and support a greener future.
        </p>
        <Button className="mt-5 bg-black">Checkout all product</Button>
      </div>
    </div>
  );
}

export default Hero;
