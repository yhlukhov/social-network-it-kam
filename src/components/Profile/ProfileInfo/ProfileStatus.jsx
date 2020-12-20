import React from "react";
import styled from "styled-components";


class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	};

	activateEditMode = () => {
		this.setState({editMode: true})
	}
	deactivateEditMode = () => {
		this.props.updateProfileStatus(this.state.status)
		this.setState({editMode: false})
	}

	onStatusChange = (e) => {
		this.setState({status: e.currentTarget.value})
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.status !== this.props.status) {
			this.setState({status: this.props.status})
		}
	}

   render() {
      return (
         <div>
            {this.state.editMode &&
               <div>
                  <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status} autoFocus={true} />
               </div>
            }
            {!this.state.editMode &&
               <Status>
                  <div onDoubleClick={this.activateEditMode}>{this.props.status}</div>
               </Status>
            }
         </div>
      );
   }
}

export default ProfileStatus;


 // * CSS * //
const Status = styled.div`
	margin: 5px;
	padding: 0 0 1px 3px;
	border: 1px solid greenyellow;
	border-radius: 3px;
`