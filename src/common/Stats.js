import React, { useState, useEffect, useContext } from "react";
import DateRangetIcon from "@material-ui/icons/DateRange";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const Stats = ({ article }) => {
  return (
    <>
      <div className="mr-4" role="button">
        <DateRangetIcon />
        <span className="ml-2">
          {new Date(article?.published_at).toLocaleDateString()}
        </span>
      </div>
      <div className="mr-4" role="button">
        <QuestionAnswerIcon />
        <span className="ml-2">{article?.comments_count}</span>
      </div>
      <div className="mr-4" role="button">
        <VisibilityIcon />
        <span className="ml-2">{article?.comments_count}</span>
      </div>
      <div className="mr-4" role="button">
        <ThumbUpAltIcon />
        <span className="ml-2">{article?.positive_reactions_count}</span>
      </div>
    </>
  );
};

export default Stats;
