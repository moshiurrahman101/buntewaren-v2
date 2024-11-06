import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FaqSection() {
  return (
    <div className="w-full lg:py-16 py-2">
      <div className="py-5 lg:mx-24 flex justify-center">
        <div className="lg:w-[700px] w-full">
          <h2 className="text-center text-2xl font-bold uppercase my-5">
            <span className="text-green-600">Frequently</span> Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Are your products environmentally friendly?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I purchase your products from Switzerland?</AccordionTrigger>
              <AccordionContent>
              Yes, you can! We offer the convenience of purchasing our products directly from Switzerland. You can order online through our website, ensuring a smooth and hassle-free shopping experience. Additionally, if you prefer a personal touch, feel free to visit our office. Please contact us to arrange a visit or for any specific needs you may have.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you use original Bangladeshi jute in your products?</AccordionTrigger>
              <AccordionContent>
              Yes, you can! We offer the convenience of purchasing our products directly from Switzerland. You can order online through our website, ensuring a smooth and hassle-free shopping experience. Additionally, if you prefer a personal touch, feel free to visit our office. Please contact us to arrange a visit or for any specific needs you may have.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What makes jute a better choice for the environment?</AccordionTrigger>
              <AccordionContent>
              Yes, you can! We offer the convenience of purchasing our products directly from Switzerland. You can order online through our website, ensuring a smooth and hassle-free shopping experience. Additionally, if you prefer a personal touch, feel free to visit our office. Please contact us to arrange a visit or for any specific needs you may have.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
