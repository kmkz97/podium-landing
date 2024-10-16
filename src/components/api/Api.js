import React from "react";
import ApiSection from "../ApiSection";
import CTA from "../CTA";
import ApiFaqs from "./ApiFaq";
import ApiFeatures from "./ApiFeatures";


const ApiPage = () => {
    return(
        <div className="ApiPage">
            <main>
                <ApiSection />
                <ApiFeatures />
                <ApiFaqs />
                <CTA />
            </main>
        </div>
    )
};

export default ApiPage;