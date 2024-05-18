import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography
} from '@mui/material';
import { fonts } from '../../helpers/fonts';
import Closet from '../../assets/closet.png';
import BlueCloset from '../../assets/blueCloset.png';
import { colors } from '../../helpers/colors';
import { useEffect, useState } from 'react';

export const CustomizeScreen = () => {
  const colorsSelection = [
    { value: colors.primaryGreen, name: 'Green' },
    { value: colors.primaryText, name: 'Dark Green' },
    { value: colors.primaryYellow, name: 'Yellow' },
    { value: colors.primaryBlue, name: 'Blue' }
  ];
  const sizeSelection = [
    { value: 'Small' },
    { value: 'Medium' },
    { value: 'Large' }
  ];

  const [image, setImage] = useState(Closet);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [colorLoading, setColorLoading] = useState(false);
  let timout;

  const onSelectColor = (color) => {
    setColorLoading(true);
    setSelectedColor(color);
    if (color === colors.primaryBlue) {
      timout = setTimeout(() => {
        setImage(BlueCloset);
        setColorLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setImage(Closet);
        setColorLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timout);
    };
  }, [timout]);

  return (
    <Box display='flex' sx={{ pl: 4, mt: 2, justifyContent: 'space-between' }}>
      <Box>
        <Typography
          sx={{
            fontSize: 110,
            fontFamily: fonts.title,
            color: colors.primaryGreen
          }}>
          Closet
        </Typography>
        <Box sx={{ mt: 0 }}>
          <Box>
            <Typography
              sx={{
                fontSize: 32,
                fontFamily: fonts.primary,
                color: colors.primaryText
              }}>
              Choose color:
            </Typography>
            <Box display={'flex'} gap={4} sx={{ mt: 2 }}>
              {colorsSelection.map((color) => (
                <Button
                  onClick={() => onSelectColor(color.value)}
                  key={color.value}
                  sx={{
                    alignItems: 'center',
                    alignContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',

                    borderRadius: 4,
                    border: color.value === selectedColor ? 2 : 0,
                    borderColor: colors.primaryGreen,
                    ':hover': {
                      border: 1,
                      borderColor: colors.primaryGreen,
                      borderRadius: 4,
                      backgroundColor: '#FFFF'
                    }
                  }}>
                  <Box
                    sx={{
                      height: 100,
                      width: 100,
                      backgroundColor: color.value,
                      border: 0.2,
                      boxShadow: 1,
                      borderColor: colors.primaryText,
                      borderRadius: 4
                    }}
                  />
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: 18,
                      fontFamily: fonts.primary,
                      color: colors.primaryText
                    }}>
                    {color.name}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography
              sx={{
                fontSize: 32,
                fontFamily: fonts.primary,
                color: colors.primaryText
              }}>
              Choose Size:
            </Typography>
            <Box display={'flex'} gap={4} sx={{ mt: 1 }}>
              {sizeSelection.map((size) => (
                <Button
                  onClick={() => {
                    setSelectedSize(size.value);
                  }}
                  key={size}
                  sx={{
                    alignItems: 'center',
                    alignContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    mt: 2,
                    mr: 2,
                    border: 1,
                    borderColor: colors.primaryGreen,
                    borderRadius: 12,
                    backgroundColor:
                      size.value === selectedSize
                        ? colors.primaryGreen
                        : '#FFFF',
                    ':hover': {
                      border: 2,
                      borderColor: colors.primaryGreen,
                      borderRadius: 12,
                      backgroundColor: colors.primaryGreen
                    }
                  }}>
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: 18,
                      fontFamily: fonts.primary,
                      color: colors.primaryText,
                      padding: 2
                    }}>
                    {size.value}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography
              sx={{
                fontSize: 32,
                fontFamily: fonts.primary,
                color: colors.primaryText
              }}>
              Choose engraving:
            </Typography>
            <Box display={'flex'} gap={4} sx={{ mt: 1 }}>
              <TextField
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: colors.primaryGreen
                    }
                  }
                }}
                InputProps={{
                  style: {
                    borderRadius: '10px',
                    height: 70,
                    fontSize: 24,
                    fontFamily: fonts.primary,
                    color: colors.primaryText
                  }
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        width='40%'
        sx={{
          mt: 16,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}>
        {colorLoading === true ? (
          <CircularProgress />
        ) : (
          <Box component={'img'} src={image} sx={{ mr: -3 }} />
        )}

        <Box sx={{ mt: 16 }}>
          <Box display={'flex'} justifyContent={'center'}>
            <Typography
              sx={{
                fontSize: 24,
                textAlign: 'center',
                mb: 2,
                color: colors.primaryText
              }}>
              Price:
            </Typography>
            <Typography
              sx={{
                fontSize: 24,
                textAlign: 'center',
                mb: 2,
                color: colors.primaryText,
                fontWeight: 'bold',
                ml: 1
              }}>
              65 BD
            </Typography>
          </Box>
          <Button
            variant='contained'
            sx={{
              width: 500,
              backgroundColor: colors.primaryGreen,
              borderRadius: 12,
              border: 2,
              borderColor: colors.primaryGreen,
              ':hover': {
                backgroundColor: colors.primaryGreen,
                border: 6
              }
            }}>
            <Typography
              sx={{
                fontSize: 24,
                fontFamily: fonts.primary,
                color: '#FFFF',
                fontWeight: 'bold',
                padding: 1
              }}>
              Buy now
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
