import React from "react";
import DateRangetIcon from "@material-ui/icons/DateRange";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import Avatar from "@material-ui/core/Avatar";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";

const Stats = ({ article }) => {
  return (
    <>
      {article && (
        <div className="font-size-ten d-flex row place-content-center w-100">
          <div className="d-flex mr-2">
            <Avatar
              alt={article?.user?.name}
              src={article?.user?.profile_image}
              className="avatar-small mr-2"
            />
            {article?.user?.name}
          </div>
          <div className="mr-4">
            <span className="mr-2">
              <DateRangetIcon />
            </span>
            {new Date(article?.published_at).toLocaleDateString()}
          </div>
          <div className="mr-4">
            <span className="mr-2">
              <QuestionAnswerIcon />
            </span>
            {article?.comments_count}
          </div>
          <div className="mr-4">
            <span className="mr-2">
              <ThumbUpAltIcon />
            </span>
            {article?.positive_reactions_count}
          </div>
          <div className="mr-4">
            <span className="mr-2">
              <AlarmOnIcon />
            </span>
            {article?.reading_time_minutes === 1
              ? article?.reading_time_minutes + " min"
              : article?.reading_time_minutes + " mins"}
          </div>
        </div>
      )}
    </>
  );
};

export default Stats;
