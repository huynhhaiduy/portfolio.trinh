import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                // strings: [
                //   "Software Developer",
                //   "Freelancer",
                //   "MERN Stack Developer",
                //   "Open Source Contributor",
                // ],
                strings: [
                    "Digital Marketing",
                    "Brand Management",
                    "Market Research",
                    "Traditional Marketing",
                    "Product Marketing",
                    "Trade Marketing",
                    "CRM & Marketing Automation",
                    "Social Media Marketing",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
