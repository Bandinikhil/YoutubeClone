import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
    const { selectedCategory, setSelectedCategory, mobileMenu } =
        useContext(Context);

    const navigate = useNavigate();

    const clickHandler = (name, type) => {
        switch (type) {
            case "category":
                return setSelectedCategory(name);
            case "home":
                return setSelectedCategory(name);
            case "menu":
                return false;
            default:
                break;
        }
    };

    return (
        <div
        //     className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-100 translate-x-[-240px] md:translate-x-0 transition-all sm:${
        //         mobileMenu ? "translate-x-[240px]" : ""
        //     }`}
        
        className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-50 translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-[0.1px]" : ""}`}
>
            <div className="flex px-5 flex-col z-50">
                {categories.map((item) => {
                    return (
                        <React.Fragment key={item.name}>
                            <LeftNavMenuItem
                                text={item.type === "home" ? "Home" : item.name}
                                icon={item.icon}
                                action={() => {
                                    clickHandler(item.name, item.type);
                                    navigate("/");
                                }}
                                className={`${
                                    selectedCategory === item.name
                                        ? "bg-white/[0.15]"
                                        : ""
                                }`}
                            />
                            {item.divider && (
                                <hr className="my-5 border-white/[0.2] z-50" />
                            )}
                        </React.Fragment>
                    );
                })}
                <hr className="my-5 border-white/[0.2] z-50" />
                <div className="text-white/[0.5] text-[12px] z-50">
                    Clone by Nikhil
                </div>
            </div>
        </div>
    );
};

export default LeftNav;