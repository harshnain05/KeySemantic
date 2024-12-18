import React, { useState } from "react";
import Heading from "../common/Heading";
import { ACCORDION_LIST} from "../utils/Helper";
import { INTER_LIST } from "../utils/Helper";
import CustomList from "../common/CustomList";
import { FAQARROW } from "../utils/Icon";
import CustomButton from "../common/CommonButton";

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container max-w-[1200px] justufy-center w-full flex max-lg:flex-wrap max-lg:justify-center gap-12 mx-auto max-xl:px-5 pt-[90px] max-lg:pt-16 max-md:pt-10 max-sm:pt-8 max-lg:pb-28 max-md:pb-20 max-sm:pb-12 max-md:gap-6 max-sm:gap-3">
      <div className="relative">
        <img
          className="max-w-[600px] sticky top-0 mx-auto w-full"
          src="./assets/image/png/faq-side.png"
          alt="faq-image"
        />
      </div>
      <div>
        <Heading text={"Key Q&A"} />
        <div className="ml-4 flex flex-col text-black gap-4 max-md:gap-2 max-sm:gap-1">
          {INTER_LIST.map((obj, i) => (
            <CustomList key={i} CustomListText={obj} />
          ))}
        </div>
        <div className="max-w-[552px] pt-4 flex flex-col gap-4 pb-6 mx-auto max-md:gap-2 max-sm:gap-1 max-md:pb-3">
          {ACCORDION_LIST.map((obj, i) => (
            <div key={i} className={`pt-2 pb-4 border-b border-silver ${i === 0 ? "border-t border-silver pt-4" : ""}`}>
              <button
                onClick={() => toggleAccordion(i)}
                className="flex justify-between w-full items-center text-lg text-[#191A42] leading-[120%] font-medium max-md:text-base"
              >
                {obj.question}
                <span className={`ml-2 ${openIndex === i ? "rotate-180" : "rotate-0"} duration-500 ease-linear transition-all`}><FAQARROW /></span>
              </button>
              <div
                className={`flex flex-col overflow-hidden transition-[max-height] duration-700 ease-linear ${openIndex === i ? "max-h-[440px] max-md:max-h-[640px]" : "max-h-0"
                  }`}
              >
                <p className="pt-4 text-base font-normal text-[#191A42] tracking-tight leading-[175%] max-md:text-sm">{obj.answerOne}</p>
                <p className="pt-3 text-base font-normal text-[#191A42] tracking-tight leading-[175%] max-md:text-sm">{obj.answerTwo}</p>
                <div className="flex gap-3 py-4">
                  <img className="max-w-[268px] w-full" src='./assets/image/png/faq-interior-one.png' alt="inside-image" />
                  <img className="max-w-[268px] w-full" src='./assets/image/png/faq-interior-two.png' alt="inside-imgage" />
                </div>
                <p className="text-base font-normal text-[#191A42] tracking-tight leading-[175%] max-md:text-sm">{obj.answerThree}</p>
              </div>
            </div>
          ))}
        </div>
        <CustomButton text="Get a demo" />
      </div>
    </div>
  );
};

export default Accordian;
