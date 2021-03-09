import React from 'react';
import './Button.css';

const STYLES = ['style-primary', 'style-secondary']
const SIZES = ['size-auto', 'size-full']
const TRANSPARENT = ['yes']
const ARROW = ['arrow-light', 'arrow-dark']

export const Button = ({children, type, onClick, buttonStyle, buttonSize, transparent, arrow}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkTransparent = TRANSPARENT.includes(transparent) ? transparent : null;
    const checkArrow = ARROW.includes(arrow) ? arrow : null;

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkTransparent} ${checkArrow}`}
        onClick={onClick} type={type}>{children}</button>
    )
}