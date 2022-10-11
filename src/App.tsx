import { Authenticator, CheckboxField, useAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

// const formFields = {
// 	signUp: {
// 	  confirmation_code: {
// 		labelHidden: false,
// 		label: 'New Label',
// 		placeholder: 'Enter your Confirmation Code:',
// 		isRequired: false,
// 	  },
// 	},
//   };

export default function App() {
	return (
		<Authenticator
			// Default to Sign Up screen
			initialState="signUp"
			// formFields={}
		>
			{({ signOut, user }) => (
				<main>
					<h1>Hello {user!.username}</h1>
					<button onClick={signOut}>Sign out</button>
				</main>
			)}
		</Authenticator>
	);
}