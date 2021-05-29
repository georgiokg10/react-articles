import React, { useState, useEffect, useContext } from "react";
import { Card } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Stats from "../../common/Stats";

const LifeCycleArts = ({ videos }) => {
  return (
    videos &&
    videos.length > 0 &&
    videos.map((video) => {
      return (
        <Card key={video.id}>
          <Card.Body>
            <Card.Subtitle className="mb-2">
              <img
                src={video.cover_image ? video.cover_image : video.social_image}
                alt=""
                className="articles-img"
              />
            </Card.Subtitle>
            <Button className="mt-2 mb-3 defaultBtn" variant="contained">
              Product
            </Button>
            <Card.Title>{video.title}</Card.Title>
            <div className="align-icons d-flex justify-content-center">
              <Stats article={video} />
            </div>
            <Card.Text>{video.description}</Card.Text>
            <div className="article-details-nav-btn">
              <span>READ MORE</span>
              <KeyboardArrowRightIcon className="mb-1" />
            </div>
          </Card.Body>
        </Card>
      );
    })
  );
};

export default LifeCycleArts;
