import React from 'react'
import "./MovieViewCard.scss"
// import {BsFillEyeFill} from "react-icons/bs"
import { Link } from 'react-router-dom'
export default function MovieViewCard({img, title, desc, grade, id, overview}) {
  return (
    <>
        <div className="viewCard">
            <div className="viewCard-img">
                <Link to={`/movie/${id}`}><img src={"https://image.tmdb.org/t/p/w500/"+img} alt={title} />
                </Link>
                {/* <span className="overview">
                    <BsFillEyeFill />
                </span> */}
            </div>
            <div className="viewCard-text">
                <div className="viewCard-text-title">{title}</div>
                <div className="viewCard-text-desc">{desc.length > 280 ? desc.slice(0,280) + "... ... ..." : desc}</div>
                <div className="viewCard-text-grade root-secondary">{grade}/10</div>
                <Link to={`/movie/${id}`}>
                    VIEW MORE
                </Link>
            </div>
        </div>
    </>
  )
}
