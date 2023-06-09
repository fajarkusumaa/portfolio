import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
    return (
        <>
            <div className="flex items-center gap-4">
                {/* left side */}
                <div className="flex flex-col items-end justify-start gap-4">
                    <div className="flip-card my-btn p-0 w-36 h-20 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h">
                            <div className="flip-card-front rounded-xl">
                                <img src="" alt="" />
                            </div>
                            <div className="flip-card-back rounded-xl bg-gray-600">
                                <a href="https://github.com/fajarkusumaa">
                                    <i className="fa-brands fa-github fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card my-btn p-0 w-48 h-36 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h">
                            <div className="flip-card-front rounded-xl">
                                <img src="" alt="" />
                            </div>
                            <div className="flip-card-back rounded-xl bg-gray-600">
                                <a href="">
                                    <i className="fa-brands fa-github fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card my-btn p-0 w-36 h-36 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h">
                            <div className="flip-card-front rounded-xl">
                                <img src="" alt="" />
                            </div>
                            <div className="flip-card-back rounded-xl bg-gray-600">
                                <a href="">
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
                            <div className="flip-card-front rounded-xl">
                                <img src="" alt="" />
                            </div>
                            <div className="flip-card-back-v rounded-xl bg-gray-600">
                                <a href="">
                                    <i className="fa-brands fa-github fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card my-btn p-0 w-64 h-64 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-v">
                            <div className="flip-card-front rounded-xl">
                                <img src="" alt="" />
                            </div>
                            <div className="flip-card-back-v rounded-xl bg-gray-600">
                                <a href="">
                                    <i className="fa-brands fa-github fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card my-btn p-0 w-64 h-48 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-v">
                            <div className="flip-card-front rounded-xl">
                                <img src="" alt="" />
                            </div>
                            <div className="flip-card-back-v rounded-xl bg-gray-600">
                                <a href="">
                                    <i className="fa-brands fa-github fa-2xl text-white"></i>
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
                                // style={{
                                //     backgroundImage: url(./)
                                // }}
                            ></div>
                            <div className="flip-card-back rounded-xl bg-gray-600">
                                <a href="">
                                    <i className="fa-brands fa-instagram fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card my-btn w-48 h-24 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h border-zinc-900">
                            <div className="flip-card-front rounded-xl">
                                <img src="" alt="" />
                            </div>
                            <div className="flip-card-back rounded-xl bg-gray-600">
                                <a href="">
                                    <i className="fa-brands fa-instagram fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card my-btn w-24 h-24 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h border-zinc-900">
                            <div className="flip-card-front rounded-xl">
                                <img src="" alt="" />
                            </div>
                            <div className="flip-card-back rounded-xl bg-gray-600">
                                <a href="">
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
