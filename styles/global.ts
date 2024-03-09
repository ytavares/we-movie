import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	html,
	body {
		padding: 0;
		margin: 0 auto;
		font-family: 'Open sans', sans-serif;
		background:${(props) => props.theme.color.gray.main};
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
	}
`;
