import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  & .parallel-button {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    letter-spacing: -0.36px;
    height: 40px;
    border: 1px solid black;
    border-radius: 4px;
    box-shadow: 6px 6px 0px black;
    transition: 0.2s;
  }
  & .parallel-button:hover {
    box-shadow: 6px 6px 0px #0f0f0f;
    background-color: #eafa35;
  }
  .parallel-button--primary {
    color: white;
    background-color: #1ea7fd;
  }
  .parallel-button--secondary {
    color: #333;
    background-color: transparent;
    // box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }
  .parallel-button--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  .parallel-button--medium {
    font-size: 16px;
    padding: 11px 27px;
  }
  .parallel-button--large {
    font-size: 16px;
    padding: 12px 24px;
  }
`

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? 'parallel-button--primary'
    : 'parallel-button--secondary'
  return (
    <ButtonWrapper>
      <button
        type="button"
        className={['parallel-button', `parallel-button--${size}`, mode].join(
          ' '
        )}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {label}
      </button>
    </ButtonWrapper>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
}
