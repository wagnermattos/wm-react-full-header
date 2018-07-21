import React from 'react';
import PropTypes from 'prop-types';
import { titleStyle, subtitleStyle, headerStyle, containerStyle, videoStyle } from './styles';

const defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
    font: 'sans-serif',
    bgImg: '',
};

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    fontFamily: PropTypes.string,
    bgImg: PropTypes.string,
    video: PropTypes.string,
};

const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImg, video }) => {
    const headerStylesCombined = {
        ...headerStyle,
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImg})`,
        color: textColor,
        fontFamily: font,
    };

    const component = (
        <header style={headerStylesCombined}>
            <div style={containerStyle}>
                {title && <h1 style={titleStyle}>{title}</h1>}
                {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
            </div>
            {video && <video style={videoStyle} autoPlay muted loop src={video} />}
        </header>
    );
    return component;
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
