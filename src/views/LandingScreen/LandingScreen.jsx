import React from 'react'
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia
} from '@mui/material'
import { Link } from 'react-router-dom'
import { styled } from '@mui/system'
import { colors } from '../../helpers/colors'

const HeroSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
  backgroundColor: colors.primaryBlue,
  textAlign: 'center',
  color: '#fff'
})

const CategoryCard = styled(Card)({
  maxWidth: 345,
  margin: '0 auto'
})

export const LandingScreen = () => {
  return (
    <Container>
      <HeroSection>
        <Typography variant="h2" component="h1" gutterBottom>
          Hello, MonteMakers!
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          What do you want to build today?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/products"
          sx={{ mt: 3 }}
        >
          Shop All Products
        </Button>
      </HeroSection>

      <Box sx={{ my: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          What are we bulding today?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CategoryCard>
                <CardMedia
                  component="img"
                  height="140"
                  image={category.image}
                  alt={category.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Link to={category.link}>{category.name}</Link>
                  </Typography>
                </CardContent>
              </CategoryCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

const categories = [
  {
    name: 'Chair',
    image:
      'https://www.communityplaythings.co.uk/-/media/images/product-images/furniture/chairs/classroom-chairs/variant-images/j505.ashx?rev=74287b1db5574ca7944452041c1169b8&sc_lang=en&hash=AB99FC46984AF11FB171B0BA074AEE08',
    link: '/products/chairs'
  },
  {
    name: 'Table',
    image:
      'https://montiplanet.com/_next/image?url=https%3A%2F%2Fwp.montiplanet.com%2Fwp-content%2Fuploads%2F2023%2F09%2Fweaning-table.png&w=3840&q=75',
    link: '/products/tables'
  },
  {
    name: 'Bed',
    image:
      'https://www.babylodge.it/wp-content/uploads/2018/03/lettino-Montessori-Babylodge%C2%AE-ARIA_bosco-incantato_3_4.jpg',
    link: '/products/beds'
  },
  {
    name: 'Closet',
    image:
      'https://montessorimethod.com/wp-content/uploads/2019/12/Montessori-Wardrobe-Alba-1.jpg',
    link: '/products/closets'
  }
]
