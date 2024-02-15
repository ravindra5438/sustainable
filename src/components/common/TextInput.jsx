// InputComponent.js
import React from 'react';
import { styled, InputBase, Typography } from '@mui/material';
import theme from '../../styles/theme';

const InputContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
});

const TypographyInput = styled(Typography)({
  textAlign:'left',
  marginBottom:'.6rem',
});

const InputField = styled(InputBase)({
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: theme.spacing(2),
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  '&:focus': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  color:'white'
});

const TextInput = ({ label, ...rest }) => {
  return (
    <InputContainer>
      <TypographyInput variant='body2'>{label.toUpperCase()}</TypographyInput>
      <InputField theme={theme} {...rest} />
    </InputContainer>
  );
};

export default TextInput;
