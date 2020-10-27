import React from 'react'
import styled from 'styled-components'

// Style

const ParagraphDiv = styled.div`
	.h1 {
		font-family: 'Montserrat Bold';
		font-size: 34px;
	}
	.h2 {
		font-family: 'Montserrat Bold';
		font-size: 28px;
	}
	.h3 {
		font-family: 'Montserrat Bold';
		font-size: 18px;
	}
	.PMedium {
		font-family: 'Montserrat Medium';
		font-size: 14px;
	}
	.PRegular {
		font-family: 'Montserrat Regular';
		font-size: 14px;
	}
`

// Component

function Text(props) {
	return (
		<ParagraphDiv>
			<p className={props.type}>{props.text}</p>
		</ParagraphDiv>
	)
}

export default Text
