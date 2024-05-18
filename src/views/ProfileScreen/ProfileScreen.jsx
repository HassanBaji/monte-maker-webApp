import React, { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  FormGroup,
  Avatar
} from '@mui/material'
import { styled } from '@mui/system'
import { colors } from '../../helpers/colors'
import { fonts } from '../../helpers/fonts'

const avatars = [
  'https://www.gstatic.com/ytkids/avatars/2023/bck_avatar_kids_optimisticgiraffe_800.png',
  'https://www.gstatic.com/ytkids/avatars/2023/bck_avatar_kids_mrmarshmellow_800.png',
  'https://www.gstatic.com/ytkids/avatars/2023/bck_avatar_kids_Tea_800.png',
  'https://www.gstatic.com/ytkids/avatars/2023/bck_avatar_kids_emohorse_800.png',
  'https://www.gstatic.com/ytkids/avatars/2023/bck_avatar_kids_gumi_800.png',
  'https://www.gstatic.com/ytkids/avatars/2023/bck_avatar_kids_T-rex_800.png',
  'https://www.gstatic.com/ytkids/avatars/2023/bck_avatar_kids_crunchy_800.png',
  'https://www.gstatic.com/ytkids/avatars/2023/bck_avatar_kids_shypanda_800.png'
]

const interestsList = ['Animals', 'Space', 'Art', 'Science', 'Sports']

const AvatarContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  marginTop: 8
})

const ProfileForm = styled('form')({
  width: '100%',
  maxWidth: '70%',
  margin: 'auto',
  marginTop: 64,
  paddingBottom: 150
})

const LargeAvatar = styled(Avatar)({
  width: 150,
  height: 150,
  margin: 'auto',
  marginBottom: 8
})

const StyledLink = styled('a')({
  color: colors.primaryBlue,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline'
  }
})

export const ProfileScreen = () => {
  const [avatar, setAvatar] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png'
  )
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')
  const [interests, setInterests] = useState([])

  const handleInterestChange = (event) => {
    const { name, checked } = event.target
    setInterests((prevInterests) =>
      checked
        ? [...prevInterests, name]
        : prevInterests.filter((i) => i !== name)
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission
    console.log({ avatar, name, age, height, interests })
    window.location.href = '/'
  }

  return (
    <Container>
      <Box textAlign="center" mt={8} mb={5}>
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontFamily: fonts.primary }}
        >
          Child's Profile
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Enter your child's details below for a personalized experience!
        </Typography>
      </Box>

      {avatar && <LargeAvatar src={avatar} />}

      <ProfileForm onSubmit={handleSubmit}>
        <AvatarContainer>
          {avatars.map((img, index) => (
            <FormControlLabel
              key={index}
              control={
                <Radio
                  checked={avatar === img}
                  onChange={() => setAvatar(img)}
                  value={img}
                  icon={<Avatar src={img} />}
                  checkedIcon={<Avatar src={img} />}
                />
              }
              label=""
            />
          ))}
        </AvatarContainer>

        <Box mt={4}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="Age"
            variant="outlined"
            fullWidth
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="Height (cm)"
            variant="outlined"
            fullWidth
            required
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </Box>
        <Box mt={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Interests</FormLabel>
            <FormGroup>
              {interestsList.map((interest, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={interests.includes(interest)}
                      onChange={handleInterestChange}
                      name={interest}
                    />
                  }
                  label={interest}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Box>
        <Button
          type="submit"
          variant="contained"
          fullWidth
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
        >
          Save Profile
        </Button>
      </ProfileForm>
    </Container>
  )
}
