import React from "react";
import Button from "@material-ui/core/Button";

const Tags = ({ tagList }) => {
    console.log(tagList)
  return (
    <>
      {tagList?.length > 0 &&
        tagList.map((tag, idx) => {
          return (
            <span key={idx} >
              <Button
                className="mt-2 mb-3 defaultBtn p-1 mr-2"
                variant="contained"
              >
                {tag}
              </Button>
            </span>
          );
        })}
    </>
  );
};

export default Tags;
