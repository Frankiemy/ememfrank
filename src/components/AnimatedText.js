import React from "react";
import Typical from "react-typical";
import { introData } from "../../content_option";

const AnimatedText = () => {
    const steps = Object.values(introData).flatMap((text) => [text, 1500]);

    return (
        <Typical
            steps={steps}
            loop={Infinity}
            wrapper="p"
        />
    );
};

export default introData;
