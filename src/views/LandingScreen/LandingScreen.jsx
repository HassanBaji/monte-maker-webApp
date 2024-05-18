import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { colors } from '../../helpers/colors'
import '../../style/Home'
import '../../style/Home.css'

import logo from '../../assets/logo-w.png'

export const LandingScreen = () => {
  return (
    <div>
      <div className="hero background">
        <div className="header">
          <div className="headerWrapper" style={{ zIndex: 1 }}>
            <div className="logo-wrapper" alt="logo">
              <img
                className="logo"
                src={logo}
                alt="Logo"
                style={{ width: '13rem' }}
              />
            </div>
            <br />
            <h1>
              <span>Crafting</span> <br /> <b>Leaders</b>
            </h1>
            <br />
            <Link to="/shop" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: colors.primaryYellow,
                  color: colors.primaryText,
                  borderRadius: '50px',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  '&:hover': {
                    backgroundColor: '#FFE57F'
                  }
                }}
              >
                Let's Build Together
              </Button>
            </Link>
          </div>
          <div className="shape shape--1 path--1"></div>
          <div className="shape shape--2 path--1"></div>
          <div className="shape shape--3 path--1"></div>
          <div className="shape shape--4 path--1"></div>
          <div className="shape shape--5 path--1"></div>
          <div className="shape shape--6 path--1"></div>
        </div>
      </div>
    </div>
  )
}
