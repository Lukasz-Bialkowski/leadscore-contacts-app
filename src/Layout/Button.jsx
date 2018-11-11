import styled from 'styled-components';

const getBackgroundColor = ({ type }) => {
  switch (type) {
    case 'login':
      return 'black';
    default:
      return 'yellow';
  }
};

const LoginButton = styled.button.attrs({ className: 'login-button' })`
  background: ${props => getBackgroundColor(props)};
  color: black;
`;

export default LoginButton;
