import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 14px;
    --text: ${props => props.theme.fontSizes.text};
    --text-button: ${props => props.theme.fontSizes.textButton};
    --title-small: ${props => props.theme.fontSizes.titleSmall};
    --title-medium: ${props => props.theme.fontSizes.titleMedium};
    --title-large: ${props => props.theme.fontSizes.titleLarge};
    --color-background: ${props => props.theme.colors.background};
    --color-textLight: ${props => props.theme.colors.textLight};
    --color-textDark: ${props => props.theme.colors.textDark};
    --color-subtitle: ${props => props.theme.colors.subtitle};
    --color-primary: ${props => props.theme.colors.primary};
    --color-secondary: ${props => props.theme.colors.secondary};
    --color-accent: ${props => props.theme.colors.accent};
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textLight};
    font-family: ${props => props.theme.fonts};
    font-size: 1rem;
    margin: 40px 76px;
  }

  @media only screen and (max-width : 780px) {
    body {
      margin: 25px;
    }
  }

  h1{
    font-size: var(--title-large);
  }

  h2{
    font-size: var(--title-medium);
  }

  h3{
    font-size: var(--title-small);
  }
`