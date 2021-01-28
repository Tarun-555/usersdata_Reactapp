import React from 'react';
import styled from 'styled-components'

function UserField(props) {
    return (
        <Field>
          <span style={{color:"#948e7c"}}>{props.field} : </span>
          <strong>{props.value}</strong>
        </Field>
    )
}

const Field = styled.p`
 display:block;
 text-align:start;
 text-transform:capitalize;
`

export default UserField;
