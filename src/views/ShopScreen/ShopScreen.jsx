import { Box, Button, Stack, Typography } from '@mui/material';
import { fonts } from '../../helpers/fonts';
import { colors } from '../../helpers/colors';
import Closet from '../../assets/closet.png';
import Table from '../../assets/table.png';
import Bed from '../../assets/bedTwo.png';


import BackgroundThree from '../../assets/background.png';
import { useNavigate } from 'react-router-dom';

export const ShopScreen = () => {
  const navigate = useNavigate();
  const items = [
    { name: 'Desk', src: Table },
    { name: 'Closet', src: Closet },
    { name: 'Bed', src: Bed }
  ];

  const filters = [
    { name: 'Chairs' },
    { name: 'Cupboards' },
    { name: 'Beds' },
    { name: 'Shelves' },
    { name: 'Tables' },
    { name: 'Closets' }
  ];

  return (
    <Box>
      <Box>
        <Box>
          <Box
            component={'img'}
            src={BackgroundThree}
            sx={{
              justifyContent: 'flex-end',
              width: '100%',
              borderRadius: 4,
              boxShadow: 1,
              mt: 2
            }}
            maxHeight={720}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            mt: -90,
            ml: 125
          }}>
          <Typography
            sx={{
              fontSize: 200,
              fontFamily: fonts.title,
              color: colors.primaryText
            }}>
            PRODUCTS
          </Typography>
          <Typography
            sx={{
              fontSize: 24,
              fontFamily: fonts.primary,
              color: colors.primaryText,
              width: '60%',
              mt: -9,
              mb: 2,
              ml: 16,
              textAlign: 'center'
            }}>
            Create Your Perfect Kid-Friendly Furniture Design Today!
          </Typography>
        </Box>
      </Box>

      <Box>
        <Box
          display='flex'
          sx={{
            padding: 4,

            justifyContent: 'center'
          }}>
          {filters.map((filter, index) => (
            <Button
              key={index}
              sx={{
                mr: 8,
                ml: 8,
                borderRadius: 4,
                border: 2,
                borderColor: colors.primaryGreen,
                pr: 4,
                pl: 4,
                pt: 1,
                paddingBottom: 1,
                alignItems: 'center',
                alignContent: 'center',

                fontWeight: 'bold',
                ':hover': {
                  backgroundColor: colors.primaryGreen
                }
              }}>
              <Typography
                sx={{
                  fontFamily: fonts.primary,
                  color: colors.primaryText,
                  fontSize: 24
                }}>
                {filter.name}
              </Typography>
            </Button>
          ))}
        </Box>
        <Stack
          display='flex'
          sx={{
            pb: 16,
            mt: 2
          }}
          spacing={8}
          direction={'row'}>
          {items.map((item, index) => (
            <Button
              onClick={() => navigate('/customize')}
              key={index}
              disableRipple
              sx={{
                '&::after': {
                  border: 3,
                  borderColor: colors.primaryGreen,
                  borderRadius: 12,
                  alignContent: 'center',
                  backgroundColor: colors.primaryGreen
                },

                '&:active::after': {
                  border: 3,
                  borderColor: colors.primaryGreen,
                  borderRadius: 12,
                  alignContent: 'center',
                  backgroundColor: colors.primaryGreen
                },
                '&.Mui-focusVisible': {
                  backgroundColor: colors.primaryGreen
                },
                '&.Mui-active': {
                  backgroundColor: colors.primaryGreen
                },
                '&:hover': {
                  border: 3,
                  borderColor: colors.primaryGreen,
                  borderRadius: 12,
                  alignContent: 'center',
                  backgroundColor: '#FFFF'
                }
              }}>
              <Box>
                <Box
                  component={'img'}
                  src={item.src}
                  maxHeight={900}
                  maxWidth={500}
                />

                <Typography
                  sx={{
                    textAlign: 'center',
                    color: colors.primaryText,
                    fontSize: 32,

                    fontFamily: fonts.primary
                  }}>
                  {item.name}
                </Typography>
              </Box>
            </Button>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
