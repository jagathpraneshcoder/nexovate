import React from 'react'

const Card = (props) => {
    return (
        <div onClick={()=>props.onClick(props.id)} className={`card-non-tech ${props.color} ${props.id}`}>
            <div className='sym-top'><div className="card-no">{props.no}</div>
            <img src={props.img} className="card-symbol" alt="" /></div>
            <div className="card-header">{props.header}</div>
            <div className="card-content-box">
            {
                props.content.map((content,idx) => {
                    return (
                        <div key={idx} className="card-content">{content}</div>
                    )
                })
            }
            </div>
            <div className="card-footer"></div>
            <div className="sym-btm">
                <div className="card-no">{props.no}</div>
                <img src={props.img} className="card-symbol " alt="" />
            </div>
        </div>
    )
}

export default Card