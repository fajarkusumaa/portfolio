// import React from "react";
import "./Hero.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
    return (
        <>
            <div className="flex items-center gap-4">
                {/* left side */}
                <div className="flex flex-col items-end justify-start gap-4">
                    <div className="flip-card my-btn p-0 w-36 h-20 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h">
                            <div
                                className="flip-card-front rounded-xl bg-center"
                                style={{
                                    backgroundImage: `url(
                                        "../src/assets/bg-profile/1.png"
                                    )`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            ></div>
                            <div className="flip-card-back rounded-xl bg-zinc-900">
                                <a
                                    href="https://github.com/fajarkusumaa"
                                    target="blank"
                                >
                                    <i className="fa-brands fa-github fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card my-btn p-0 w-48 h-36 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h">
                            <div
                                className="flip-card-front rounded-xl"
                                style={{
                                    backgroundImage: `url(
                                        "../src/assets/bg-profile/2.png"
                                    )`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            ></div>
                            <div className="flip-card-back rounded-xl bg-zinc-900">
                                <a href="">
                                    <h2 className="text-white">My Works</h2>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card my-btn p-0 w-36 h-36 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h">
                            <div
                                className="flip-card-front rounded-xl"
                                style={{
                                    backgroundImage: `url(
                                        "../src/assets/bg-profile/3.png"
                                    )`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            ></div>
                            <div className="flip-card-back rounded-xl bg-zinc-900">
                                <a
                                    href="https://dribbble.com/fajarksm"
                                    target="blank"
                                >
                                    <i className="fa-brands fa-dribbble fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end: left side */}

                {/* middle */}
                <div className="flex flex-col items-end justify-start gap-4 ">
                    <div className="flip-card my-btn p-0 w-64 h-36 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-v">
                            <div
                                className="flip-card-front rounded-xl"
                                style={{
                                    backgroundImage: `url(
                                        "../src/assets/bg-profile/4.png"
                                    )`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            ></div>
                            <div className="flip-card-back-v rounded-xl bg-zinc-900">
                                <a href="">
                                    <i className="fa-brands fa-github fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card my-btn p-0 w-64 h-64 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-v">
                            <div
                                className="flip-card-front rounded-xl"
                                style={{
                                    backgroundImage: `url(
                                        "../src/assets/bg-profile/5.png"
                                    )`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            ></div>
                            <div className="flip-card-back-v rounded-xl bg-zinc-900">
                                <a href="">
                                    <i className="fa-brands fa-github fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card my-btn p-0 w-64 h-48 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-v">
                            <div
                                className="flip-card-front rounded-xl"
                                style={{
                                    backgroundImage: `url(
                                        "../src/assets/bg-profile/6.png"
                                    )`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            ></div>
                            <div className="flip-card-back-v rounded-xl bg-zinc-900">
                                <a href="">
                                    <p className="text-2xl text-white">
                                        Let's Talk
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end : middle */}

                {/* right side */}
                <div className="flex flex-col items-start justify-start gap-4 ">
                    <div className="flip-card my-btn w-36 h-64 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h border-zinc-900">
                            <div
                                className="flip-card-front rounded-xl bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(
                                        "../src/assets/bg-profile/7.png"
                                    )`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            ></div>
                            <div className="flip-card-back rounded-xl bg-zinc-900">
                                <a
                                    href="https://instagram.com/fajarksm?igshid=ZDc4ODBmNjlmNQ=="
                                    target="blank"
                                >
                                    <i className="fa-brands fa-instagram fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card my-btn w-48 h-24 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h border-zinc-900">
                            <div
                                className="flip-card-front rounded-xl"
                                style={{
                                    backgroundImage: `url(
                                        "../src/assets/bg-profile/8.png"
                                    )`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            ></div>
                            <div className="flip-card-back rounded-xl bg-zinc-900">
                                <a href="">
                                    <i className="fa-brands fa-instagram fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card my-btn w-24 h-24 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h border-zinc-900">
                            <div
                                className="flip-card-front rounded-xl"
                                style={{
                                    backgroundImage: `url(
                                        "../src/assets/bg-profile/9.png"
                                    )`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            ></div>
                            <div className="flip-card-back rounded-xl bg-zinc-900">
                                <a
                                    href="https://instagram.com/fajarksm"
                                    target="blank"
                                >
                                    <i className="fa-brands fa-instagram fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end : right side */}
            </div>
        </>
    );
};

export default Hero;
