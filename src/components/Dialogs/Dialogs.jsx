import React from 'react';
import css from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <div className={css.diagog + ' ' + css.active}>
                    <div>Dima</div>
                </div>
                <div className={css.diagog}>
                    Andrey
                </div>
                <div className={css.diagog}>
                    Sveta
                </div>
                <div className={css.diagog}>
                    Sasha
                </div>
                <div className={css.diagog}>
                    Dina
                </div>
            </div>
            <div className={css.messages}>
                <div className={css.message}>Hi</div>
                <div className={css.message}>How are your learing?</div>
                <div className={css.message}>Good</div>
            </div>
        </div>
    )
}

export default Dialogs;