import { ReactNode } from "react";
import "./index.scss"
import  {X}  from 'lucide-react';


interface IPorps {
    type:string,
    icon:ReactNode,
    title:string,
    description:string
}
const Alert = ({type,icon,title,description}: IPorps) => {
    return (
        <div className={type}>
            <div className="alert-header">
                <div className="alert-title">
                    <span className="icon">{icon}</span>
                    <h4>{title}</h4>
                </div>
                <X className="close" />
            </div>
            <p>{description}</p>
        </div>
    )
}

export default Alert