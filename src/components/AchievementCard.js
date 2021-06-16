/*
import React from "react";
import '../css/AchievementCard.css';

function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={ "dark-mode certificate-card" }>

      <div className="certificate-detail-div">
        <h5 className={ "dark-mode card-title" }>
          {cardInfo.title}
        </h5>
        <p className={ "dark-mode card-subtitle" }>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={
                 "dark-mode certificate-tag"
              }
              onClick={() => openUrlInNewTab(v.url)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default AchievementCard;
*/
