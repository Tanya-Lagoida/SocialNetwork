import React, { ChangeEvent} from 'react';

type ProfileStatusType = {
  status: string
  updateStatusThunk: (status: string) => void
}

type StateType = {
  editMode: boolean
  status: string
}

class ProfileStatus extends React.Component<ProfileStatusType, StateType> {
  constructor(props: ProfileStatusType) {
    super(props)

    this.state = {
      editMode: false,
      status: this.props.status
    };
    this.activateEditMode = this.activateEditMode.bind(this)
    this.deActivateEditMode = this.deActivateEditMode.bind(this)
    this.onStatusChange = this.onStatusChange.bind(this)
  }

  activateEditMode ()  {
    this.setState({
      editMode: true
    })
  }
  deActivateEditMode ()  {
    this.setState({
      editMode: false
    });
    this.props.updateStatusThunk(this.state.status)
  }

  onStatusChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<StateType>, snapshot?: any): void {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode
          ?
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
          </div>
          :
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}/>
          </div>
        }
      </div>
    );
  }
};
export default ProfileStatus;


