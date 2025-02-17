import React from "react";

const Card = (props) => {
  return (
    <div
      onClick={() => props.onClick(props.id)}
      className={`card-non-tech ${props.color} ${props.id}`}
    >
      <div className="scroll-card-nt">
        <div className="sym-top-nt">
          <div className="card-no-nt">{props.no}</div>
          <img
            src={props.img}
            className="card-symbol-nt"
            alt="symbol"
            loading="lazy"
          />
        </div>
        <div className="card-header-nt">{props.header}</div>
        <div className="card-content-box-nt">
          {props.content.map((content, idx) => {
            return (
              <div key={idx} className="card-content-nt">
                {content}
              </div>
            );
          })}
        </div>
        <div className="card-footer-nt"></div>
        <div className="sym-btm-nt">
          <div className="card-no-nt">{props.no}</div>
          <img
            src={props.img}
            className="card-symbol-nt "
            alt="symbol"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
