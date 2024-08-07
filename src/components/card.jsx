import "./box.css";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/Ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiSolidUser } from "react-icons/Bi";

function Card(props) {
  return (
    <>
      <div className="box" style={{backgroundColor : props.post === "FRONTEND" ? "white" : "black"}}>
        <div className="one">
          <div className="line" style={{backgroundColor : props.post === "FRONTEND" ? "black" : "white"}}></div>
          <div className="last">
            <div className="textHolder">
              <h2 style={{color: props.post === 'FRONTEND' ? 'black' : 'white'}}>{props.text}</h2>
              <h4 className="name" style={{color: props.post === 'FRONTEND' ? 'black' : 'white'}}>{props.post} DEVELOPER</h4>
            </div>
            <div className="iconHolder" style={{backgroundColor : props.post === "BACKEND" ? "white" : "black"}}>
              <BiSolidUser fill={
                props.post === "FRONTEND" ? "white" : "black"
              } size={50} />
            </div>
          </div>
        </div>
        <div className="two">
          <div className="line" style={{backgroundColor : props.post === "FRONTEND" ? "black" : "white"}}>
            <FiPhone fill={
                props.post === "FRONTEND" ? "white" : "black"
            }
             size={30} />
          </div>
          <div className="ck">
            <p style={{color: props.post === "FRONTEND" ? "black" : "white"}}>{props.number}</p>
          </div>
        </div>
        <div className="three">
          <div className="line" style={{backgroundColor : props.post === "FRONTEND" ? "black" : "white"}}>
            <MdOutlineEmail fill={
                props.post === "FRONTEND" ? "white" : "black"
            }
             size={30} />
          </div>
          <div className="ck">
            <p style={{color : props.post === "FRONTEND" ? "black" : "white"}}>{props.email}</p>
          </div>
        </div>
        <div className="four">
          <div className="line" style={{backgroundColor : props.post === "FRONTEND" ? "black" : "white"}}>
            <AiOutlineGlobal fill={
                props.post === "FRONTEND" ? "white" : "black"
            } size={30} />
          </div>
          <div className="ck">
            <p style={{color : props.post === "FRONTEND" ? "black" : "white"}}>{props.global}</p>
          </div>
        </div>
        <div className="five">
          <div className="lines" style={{backgroundColor : props.post === "FRONTEND" ? "black" : "white"}}>
            <HiOutlineLocationMarker fill="white" size={30} />
          </div>
          <div className="ck">
            <p style={{color : props.post === "FRONTEND" ? "black" : "white"}}>{props.location}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;