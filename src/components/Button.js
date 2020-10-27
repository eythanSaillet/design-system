import React from 'react'
import styled from 'styled-components'

// Style

const ButtonDiv = styled.div`
	display: flex;
	a {
		padding: 12px 25px;
		border-radius: 4px;
		font-family: 'Montserrat ExtraBold';
		font-size: 14px;
		text-decoration: none;
	}
	.primary {
		background: var(--primary100);
		color: white;
		border: 1px solid var(--primary100);
		&:hover {
			background: var(--primary60);
			border: 1px solid var(--primary60);
		}
	}
	.alternative {
		background: white;
		color: black;
		border: 1px solid var(--black);
		&:hover {
			border: 1px solid var(--grey);
		}
	}
`

// Component

function Button(props) {
	return (
		<ButtonDiv>
			<a href={props.href} className={props.type}>
				{props.text}
			</a>
		</ButtonDiv>
	)
}

export default Button
