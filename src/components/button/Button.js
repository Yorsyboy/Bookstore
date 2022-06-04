import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonType, id, text }) => (
  <button type={buttonType === 'button' ? 'button' : 'submit'} id={id}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
};

export default Button;
