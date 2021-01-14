import React from 'react'

function UserField(props) {
    return (
        <p style={{display:'block',textAlign:'start',textTransform:'capitalize'}}>
          <span style={{color:"#948e7c"}}>{props.field} : </span>
          <strong>{props.value}</strong>
        </p>
    )
}

export default UserField;
