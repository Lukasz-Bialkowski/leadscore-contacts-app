import React from 'react';
import styled from 'styled-components';

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 210px;
  width: 140px;
`;

const FakeAvatar = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #ffff309c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: black;
  font-weight: 700;
  box-shadow: 0px 5px 20px 3px rgba(0, 0, 0, 0.8);
`;

const AvatarImage = styled.img.attrs({
  className: 'avatar-image',
  src: props => props.src
})`
  border-radius: 50%;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.9);
  height: 80px;
`;

const avatarPicker = ({ profilePicture, companyName, displayName }) => {
  if (profilePicture) {
    return <AvatarImage src={profilePicture} />;
  }
  if (companyName) {
    return (
      <FakeAvatar>
        {companyName ? <span>{companyName.charAt(0)}</span> : <span>A</span>}
      </FakeAvatar>
    );
  }
  if (displayName) {
    return (
      <FakeAvatar>
        {displayName ? (
          <span>{displayName.charAt(0)}</span>
        ) : (
          <span>&nbsp;</span>
        )}
      </FakeAvatar>
    );
  }
  return null;
};

const Avatar = props => <AvatarWrapper>{avatarPicker(props)}</AvatarWrapper>;

export default Avatar;
