import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Banner() {
    return (
        <div id="home" 
        className="section container mx-auto max-w-[1200px] px-3 items-center">
        <div className="w-full" data-aos="zoom-in">
                <div className="block text-center font-secondary font-black text-[-30px]">
                    Hello, I am Learning
                    <div>
            <TypeAnimation
            sequence={[
            'Fundamental Web Developer',
            3000,
            'Frontend Developer',
            3000,
            'Backend Developer',
            3000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="ml-3 text-secondary"
            />
        </div>
        </div>
        <div className="max-w-[750px] text-center mx-auto mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed elementum sem. Phasellus aliquet neque eu quam feugiat consectetur. Donec ut lacinia ex. Curabitur hendrerit accumsan lacinia. Nulla facilisi. Cras tristique libero a accumsan pellentesque. Praesent luctus dignissim pretium.
        </div>
        </div>
        </div>
    )
}
