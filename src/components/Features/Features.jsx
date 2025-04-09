import React, { useContext, useState } from "react";
import noFeature from "../../assets/icon/nofeature.svg";
import addFeature from "../../assets/icon/addFeature.svg";
import setting from "../../assets/icon/setting.svg";
import trash from "../../assets/icon/trash.svg";
import AddFeatures, { features } from "../AddFeatures/AddFeatures";
import { Context } from "../../context/ContextProvider";
import { FaAngleDown } from "react-icons/fa";

const Features = () => {
  const {
    addNewFeature,
    setAddNewFeature,
    showSelectedFeatures,
    setSelectedFeatures,
    setShowSelectedFeatures,
  } = useContext(Context);
  const [isOpen, setIsOpen] = useState({});
  const filteredFeatures = features
    .map((feature) => ({
      ...feature,
      options: feature.options.filter((opt) => showSelectedFeatures[opt]),
    }))
    .filter((feature) => feature.options.length > 0);

  const handleDeleteFeature = (option) => {
    const updatedFeatures = { ...showSelectedFeatures };
    delete updatedFeatures[option];

    setShowSelectedFeatures(updatedFeatures);
    setSelectedFeatures(updatedFeatures);
  };
  return (
    <div className="w-full max-md:px-2">
      <div className="flex items-center gap-x-2 max-md:hidden">
        <h3 className="text-[18px] satoshi_bold pl-1">Features </h3>
        <img
          onClick={() => setAddNewFeature(!addNewFeature)}
          src={addFeature}
          alt=""
          className="cursor-pointer"
        />
      </div>
      <div className="text-center mr-2">
        {Object.keys(showSelectedFeatures).length > 0 &&
        Object.values(showSelectedFeatures).includes(true) ? (
          filteredFeatures.map((feature, index) => (
            <div className="text-start" key={index}>
              <div
                onClick={() =>
                  setIsOpen((prev) => ({
                    ...prev,
                    [feature.title]: !prev[feature.title],
                  }))
                }
                className="flex w-max items-center my-2 gap-x-1"
              >
                <FaAngleDown
                  color="#515366"
                  className={`${
                    !isOpen[feature.title] ? "rotate-0" : "rotate-180"
                  }`}
                />
                <h4 className="satoshi_bold  cursor-pointer">
                  {feature.title}
                </h4>
              </div>
              {feature.options.map((opt, idx) => (
                <div
                  key={index - idx}
                  className={`flex items-center justify-between duration-300 ${
                    isOpen[feature.title] ? "h-0 overflow-hidden" : "mb-1 h-max"
                  }`}
                >
                  <div className="flex items-center gap-x-1 ">
                    <img src={setting} alt="" />
                    <p key={idx}>{opt}</p>
                  </div>
                  <div onClick={() => handleDeleteFeature(opt)} className="">
                    <img
                      src={trash}
                      alt=""
                      className="min-w-[12px] cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <>
            <img
              src={noFeature}
              alt="noFeature"
              className="max-w-[58px] mx-auto w-full mt-3 "
            />
            <h5 className="text-[#252840CC] satoshi_bold py-2 text-[18px]">
              No features available yet.{" "}
            </h5>
            <p className="text-[#252840CC]">
              They will appear here once you <br /> complete the questions.
            </p>
          </>
        )}
        <button
          onClick={() => {
            setAddNewFeature(!addNewFeature);
          }}
          className=" hover:text-[#2433A7] active:text-[#666687] duration-300 my-4 text-[#364CEB] cursor-pointer"
        >
          + Add new feature
        </button>
      </div>
      <div className="">{addNewFeature && <AddFeatures />}</div>
    </div>
  );
};

export default Features;
