import React from "react";

export default function LabelSmall(props) {
    let labelText = props.labelText
    return (
        <>
        <div className="label small dashed">
            <p>
            {labelText}
            </p>
        </div>
        </>
    )
}