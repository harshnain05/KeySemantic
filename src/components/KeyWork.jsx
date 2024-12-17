import React from "react";
import {CardData} from '../utils/Helper';
const KeyWork = () => {
   

    return (
        <div className="bg-white items-center py-12">
            <div className="max-w-6xl container mx-auto items-center text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    How does KeySemantics work?
                </h2>
                <div className="grid md:grid-cols-3 gap-[72px]">
                    {CardData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white p-6  text-center"
                        >
                            <div className=" mb-6">{card.icon}</div>

                            <p className="text-base leading-7 font-normal max-w-[290px]">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KeyWork;
