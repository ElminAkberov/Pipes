import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import sendPrompt from "../../assets/icon/sendPrompt.svg";
import { NavLink } from "react-router-dom";

const Chat = () => {
  const [link, setLink] = useState("/chat");

  useEffect(() => {
    const handleResize = () => {
      setLink(window.innerWidth < 768 ? "/chat" : "/features");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <menu className="bg-white md:border-x md:border-b border-[#A8B0D4] md:px-4 md:pb-4 md:rounded-b-2xl ">
      <div className="bg-[#EDF3FE] min-h-[calc(100vh-var(--header-height))] flex max-md:mt-6  flex-col items-center md:justify-center text-center md:rounded-4xl ">
        <div className="max-w-[600px] max-md:mx-[25px] ">
          <h2 className="text-[24px] font-bold">
            Tell about your software product to AI assistant
          </h2>
          <p className="text-[#666687] mb-[28px]">
            Ask, add features, iterate with generated UX/UI screens, get
            documentation and insights of your product
          </p>
          <div className="relative md:w-[90%] mx-auto p-4 bg-white border  border-white focus-within:border-[#2D54DD] rounded-[30px]">
            <textarea
              rows={5}
              className="bg-white placeholder:text-[#25284052] resize-none w-full py-[5px] pr-[25px] pb-[25px] px-[10px]  border-white text-[15px]  text-[#252840] outline-none "
              placeholder={
                "I’m looking to create a mobile app that lets users track their personal finances, set budgeting goals, and receive spending insights. It should integrate with bank accounts and offer visual reports"
              }
            ></textarea>
            <NavLink to={link}>
              <Button className="absolute bottom-9 right-10 mt-10">
                <img
                  src={sendPrompt}
                  alt="button"
                  className="max-w-[25px] absolute bg-white"
                />
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </menu>
  );
};

export default Chat;
