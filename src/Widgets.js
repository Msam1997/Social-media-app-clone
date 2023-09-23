import React from "react";
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Environment updates", "Top news - 899 reader")}
      {newsArticle("Tech updates", "Top news - 678 reader")}
      {newsArticle("Crpto today", "Crypto - 456 reader")}
      {newsArticle("JavaScript Mastery", "Code - 78999 reader")}
      {newsArticle("Automobile today", "Cars & auto - 90 reader")}
    </div>
  );
};

export default Widgets;