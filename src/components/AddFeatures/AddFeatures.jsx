import React, { useContext, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { IoMdClose } from "react-icons/io";
import ghost from "../../assets/icon/ghost.svg";
import setting from "../../assets/icon/setting.svg";
import styles from "./AddFeatures.module.css";
import { Context } from "../../context/ContextProvider";

export const features = [
  {
    title: "Product & Store Features",
    options: [
      "Product Category",
      "Filtering & Sorting",
      "Inventory & Stock Management",
      "Add-ons",
      "Product Variations (Size, Color, etc.)",
      "Product groups (Popular, New, etc)",
    ],
  },
  {
    title: "Shipping & Delivery",
    options: [
      "Shipping Cost Calculator",
      "Distance-Based Delivery Calculator",
      "Address Management",
      "Multiple Delivery Methods",
      "Courier App & Dashboard",
      "Same-Day or Express Delivery",
    ],
  },
];
const AddFeatures = () => {
  const [search, setSearch] = useState("");

  const {
    addNewFeature,
    setAddNewFeature,
    selectedFeatures,
    setSelectedFeatures,
    showSelectedFeatures,
    setShowSelectedFeatures,
  } = useContext(Context);
  const handleCheckboxChange = (e, option) => {
    const isChecked = e.target.checked;
    setSelectedFeatures((prevSelected) => ({
      ...prevSelected,
      [option]: isChecked,
    }));
  };

  const filteredFeatures = features.map((section) => ({
    ...section,
    options: section.options.filter((option) =>
      option.toLowerCase().includes(search.toLowerCase())
    ),
  }));

  const noResults = filteredFeatures.every(
    (section) => section.options.length === 0
  );

  const selectedCount = Object.values(selectedFeatures).filter(Boolean).length;
  return (
    <div className="bg-white shadow-[0px_4px_14px_0px_#00000026] md:absolute md:w-[360px] lg:w-[410px] md:right-[360px] top-0 md:rounded-2xl py-4 pl-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="satoshi_bold">Add new feature</h2>
        <IoMdClose
          onClick={() => setAddNewFeature(!addNewFeature)}
          className="mr-5 cursor-pointer"
        />
      </div>
      <div
        className={`md:max-h-[400px] mr-[2px] overflow-hidden overflow-y-scroll ${styles["scrollbar-custom"]}`}
      >
        <div className="mr-2">
          <Input
            placeholder={"Searching... "}
            className="!py-2 !bg-[#F4F8FF] !rounded-[10px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {noResults ? (
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col items-center justify-center my-20">
              <img src={ghost} alt="" />
              <p className="text-lg text-[#252840CC]">No features found</p>
            </div>
          </div>
        ) : (
          filteredFeatures.map(
            (section, idx) =>
              section.options.length > 0 && (
                <div key={idx}>
                  <h4 className="text-xs satoshi_bold my-[12px]">
                    {section.title}
                  </h4>
                  {section.options.map((option, index) => (
                    <div key={index} className="flex items-center gap-1.5">
                      <div className={styles["checkbox-container"]}>
                        <input
                          type="checkbox"
                          id={`checkbox${idx}-${index}`}
                          checked={!!selectedFeatures[option]}
                          onChange={(e) => handleCheckboxChange(e, option)}
                        />
                        <label htmlFor={`checkbox${idx}-${index}`}>
                          {option}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              )
          )
        )}
      </div>
      <div className="flex justify-center mt-5">
        <Button
          onClick={() => {
            setShowSelectedFeatures(selectedFeatures);
            setAddNewFeature(!addNewFeature);
          }}
          children={
            selectedCount === 0 ? "Add" : `Add (${selectedCount} selected)`
          }
          className="w-full max-w-[220px] button-lg satoshi_bold active:text-[#6681F4] text-sm py-[8px] rounded-full text-white"
        />
      </div>
    </div>
  );
};

export default AddFeatures;
