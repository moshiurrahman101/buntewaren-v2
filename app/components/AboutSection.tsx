import { Button } from "@/components/ui/button"


function AboutSection() {
  return (
    <div className="w-full aboutSection lg:py-16 py-2">
      <div className="py-5 lg:mx-24">
        <div className="flex lg:flex-row flex-col justify-end items-center gap-5 mt-10 mx-5">
          <div className="lg:w-[50%] text-lg flex flex-col gap-3 text-[24px] leading-10">
            <h3 className="font-bold text-2xl">
            About us
            </h3>
            <p>
            We have been selling our products in Switzerland for a long time. Because we pay attention to good quality and sustainability, we offer you useful jute bags for various occasions. This means you can also avoid using plastic bags when shopping. Our products are carefully produced from pure jute so that they last a long time. This means you can take the bags with you everywhere.
            </p>
            <Button>Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
