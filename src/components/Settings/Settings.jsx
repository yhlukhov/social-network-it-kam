import React from 'react';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import css from './Settings.module.css';

const Settings = () => {
    return (
        <div>Settings</div>
    )
}

export default withAuthRedirect(Settings);