import React from 'react'
import styled from 'styled-components'
import Text from '../Text'
import Input from './Input'

// Style

const FieldsetDiv = styled.div`
	.PMedium {
		margin-bottom: var(--xsSpacing);
	}
`

// Component

function Fieldset(props) {
	return (
		<FieldsetDiv>
			<Text type="PMedium" text={props.labelText}></Text>
			<Input type={props.inputType} className={props.inputType} placeholder={props.inputPlaceholder}></Input>
		</FieldsetDiv>
	)
}

export default Fieldset
