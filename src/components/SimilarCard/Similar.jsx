import React from 'react'
import { Link } from 'react-router-dom'
import "./Similar.scss"

export default function Similar({id,img,title,desc}) {
  return (
    <>
        <div className="SimilarCard">
            <div className="img">
                <img src={"https://image.tmdb.org/t/p/w500/"+img} alt={title} />
            </div>
            <div className="text">
                <div className="text-title">{title}</div>
                <div className="text-desc">{desc ? desc.slice(0,80) + "..." : desc}</div>
            </div>
        </div>
    </>
  )
}
