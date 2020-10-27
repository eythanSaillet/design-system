import React from 'react'
import styled from 'styled-components'
import inputErrorLogo from '../../assets/inputError.svg'

// Style

const InputDiv = styled.div`
	position: relative;
	width: 286px;
	height: 40px;
	input {
		width: 100%;
		height: 100%;
		border-radius: 2px;
		font-family: 'Montserrat Regular';
		font-size: var(--sSpacing);
		padding: 0 16px;
		&:focus {
			outline: none;
		}
	}
	.action {
		border: 1px solid var(--action100);
	}

	.error {
		border: 1px solid var(--primary100);
	}
	img {
		position: absolute;
		top: 50%;
		right: -4%;
		transform: translate(50%, -50%);
	}
`

// Component

function Input(props) {
	return (
		<InputDiv>
			<input className={props.type} placeholder={props.placeholder}></input>
			{props.type === 'error' && <img src={inputErrorLogo} alt="Error logo"></img>}
		</InputDiv>
	)
}

export default Input
