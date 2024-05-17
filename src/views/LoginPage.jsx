import React from 'react'
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Link
} from '@mui/material'
import { styled } from '@mui/system'
import { colors } from '../helpers/colors'

const LoginForm = styled('form')({
  width: '100%',
  maxWidth: 360,
  margin: 'auto',
  marginTop: 64
})

const LoginButton = styled(Button)(({ theme }) => ({
  marginTop: 16,
  color: 'black',
  backgroundColor: colors.primaryBlue,
  '&:hover': {
    backgroundColor: colors.primaryYellow
  }
}))

const StyledLink = styled(Link)({
  color: colors.primaryBlue,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline'
  }
})

const LoginPage = () => {
  return (
    <Container>
      <Box textAlign="center" mt={8}>
        <Typography variant="h4" gutterBottom>
          Welcome, Makers!
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Log in to your account
        </Typography>
      </Box>

      <LoginForm>
        <Box mt={2}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            type="email"
            autoFocus
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            required
            type="password"
          />
        </Box>
        <LoginButton
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          mt={4}
          type="submit"
        >
          Log In
        </LoginButton>
      </LoginForm>

      <Box textAlign="center" mt={2}>
        <Typography variant="body2" color="textSecondary">
          Don't have an account?{' '}
          <StyledLink href="/register">Sign Up Now!</StyledLink>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Forgot your password?{' '}
          <StyledLink href="/forgot-password">Reset it here!</StyledLink>
        </Typography>
      </Box>
    </Container>
  )
}

export default LoginPage
