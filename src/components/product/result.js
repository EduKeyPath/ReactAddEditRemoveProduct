import React from "react";

export default function Result(props){
    return(
        <>
            Result : 
            {
                (props.count >= 1 && props.count < 5) &&
                <h3 className={(props.count > 2) ? 'fail' : 'pass'}>
                    {props.count} (Fail)
                </h3>
            }
            {
                (props.count >= 5 && props.count <= 8) &&
                <h3 className="pass">
                    {props.count} (Pass)
                </h3>
            }
            {
                (props.count > 8) &&
                <h3 className="good">
                    {props.count} (Good)
                </h3>
            }
        </>
    )
}