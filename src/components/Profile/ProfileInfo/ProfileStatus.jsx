import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProfileStatus = (props) => {
	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState(props.status)

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deactivateEditMode = () => {
		props.updateProfileStatus(status)
		setEditMode(false)
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	useEffect(() => {
		// не заню чи це потрібно і як правильно написати
		setStatus(props.status)
	},[props.status])

      return (
         <div>
            {editMode &&
               <div>
                  <Textarea onChange={onStatusChange} onBlur={deactivateEditMode} value={status} autoFocus={true} />
               </div>
            }
            {!editMode &&
               <Status>
                  <div onDoubleClick={activateEditMode}>{props.status}</div>
               </Status>
            }
         </div>
      );
}

export default ProfileStatus;


 // * CSS * //
const Status = styled.div`
	margin: 5px;
	padding: 0 0 1px 3px;
	border: 2px solid #cbff7e;
	border-radius: 3px;
`
const Textarea = styled.input`
	width: 200px;
   height: 30px;
   border: 1px solid lightblue;
   border-bottom-left-radius: 5px;
   border-top-left-radius: 5px;
`