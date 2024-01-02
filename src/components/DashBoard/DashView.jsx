import React from "react";
import { useSelector } from "react-redux";
import { MdAddTask } from "react-icons/md";
import { AiOutlinePlus,AiOutlineUser } from "react-icons/ai";
import { GoKebabHorizontal } from "react-icons/go";
import "./DashView.css";
import Card from "../Card/Card";

const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dashContainer">
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {!user ? (
                      <MdAddTask />
                    ) : (
                      <div
                        className="imageContainer relative"
                        style={{
                          width: "15px",
                          height: "15px",
                          display: "inline-block",
                        }}
                      >
                        <AiOutlineUser/>
                      </div>
                    )}
                    <span className="title">{elem[index]?.title}</span>
                    <span className="length">{elem[index]?.value?.length}</span>
                  </div>
                  <div className="rightView">
                    <AiOutlinePlus />
                    {/* <span style={{ letterSpacing: "2px" }}>...</span> */}
                    <GoKebabHorizontal />
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashView;
