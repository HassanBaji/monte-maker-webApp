import React, { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Link
} from '@mui/material'
import { styled } from '@mui/system'
import { colors } from '../../helpers/colors'
import { fonts } from '../../helpers/fonts'

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

export const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValid, setIsValid] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    validateForm()
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    validateForm()
  }

  const validateForm = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/
    setIsValid(emailPattern.test(email) && password.length >= 6)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = '/'
  }

  return (
    <Container>
      <Box textAlign="center" mt={8}>
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontFamily: fonts.primary }}
        >
          Welcome, Makers!
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Log in to your account
        </Typography>
      </Box>

      <LoginForm onSubmit={handleSubmit}>
        <Box mt={2}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            type="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            required
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Box>
        <StyledLink href="/" style={{ textDecoration: 'none' }}>
          <LoginButton
            variant="contained"
            fullWidth
            size="large"
            sx={{
              backgroundColor: colors.primaryYellow,
              color: colors.primaryText,
              borderRadius: '50px',
              padding: '10px 20px',
              marginTop: '12px',
              fontWeight: 'bold',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#FFE57F'
              }
            }}
            disabled={!isValid}
            type="submit"
          >
            Login
          </LoginButton>
        </StyledLink>
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
