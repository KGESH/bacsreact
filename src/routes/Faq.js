import React from "react";
import videoSource from "../Images/bacs_faq_bg.mp4";

function Faq() {
    return (
        <section className="contanier">
            <div className="Faq">
                <section className="section__faq">
                    <video autoPlay="autoplay" loop="loop" muted className="video_faq">
                        <source src={videoSource} type="video/mp4"/>
                        your browser does not support the video tag
                    </video>
                <h2 className="section__title">무엇을 도와드릴까요~~</h2>
                
                </section>
            </div>

        </section>
    );
}

export default Faq;