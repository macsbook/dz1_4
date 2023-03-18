import React from 'react';
import style from './Button.module.css'

function Button(props) {
    return (
        <div>
            <button className={style.button_c}>
                Click me!
            </button>
        </div>
    );
}

export default Button;