import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Tags = ({ tagList }) => {
  const articlesHistory = useHistory();

  const navigateToTaggedArticle = (tag) => {
    articlesHistory.push(`/tagged/${tag}`);
  };

  return (
    <>
      {tagList?.length > 0 &&
        tagList.map((tag, idx) => {
          return (
            <span key={idx}>
              <Button
                className="mt-2 mb-3 defaultBtn p-1 mr-2"
                variant="contained"
                onClick={() => navigateToTaggedArticle(tag)}
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
