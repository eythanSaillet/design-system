import Text from './components/Text'
import styled from 'styled-components'
import Fieldset from './components/form/Fieldset'
import Button from './components/Button'

const AppDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 375px;
	height: 500px;
	.fieldsetsContainer {
		> div {
			margin-bottom: var(--mSpacing);
		}
	}
	.buttonsContainer {
		display: flex;
		div {
			margin-right: var(--xsSpacing);
		}
	}
`

function App() {
	return (
		<AppDiv>
			<Text type="h1" text="Sign up"></Text>
			<div className="fieldsetsContainer">
				<Fieldset labelText="Full Name" inputType="" inputPlaceholder="Pedro Roso"></Fieldset>
				<Fieldset labelText="Email" inputType="action" inputPlaceholder="pedro.roso@hotmail.com"></Fieldset>
				<Fieldset labelText="Password" inputType="error" inputPlaceholder="Password"></Fieldset>
			</div>
			<div className="buttonsContainer">
				<Button type="primary" text="Sign up" href="#"></Button>
				<Button type="alternative" text="Cancel" href="#"></Button>
			</div>
		</AppDiv>
	)
}

export default App
