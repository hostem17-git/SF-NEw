import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import { AppBar, Box, } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

import Logo from '../../assets/logo.svg'

import Twitter from '../../assets/Twitter.png'
import Discord from '../../assets/Discord.png'
import Instagram from '../../assets/Instagram.png'
import Telegram from '../../assets/Telegram.png'
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import $ from 'jquery'

import './NavBar.css'
import { Link } from 'react-router-dom';


const social = [
  { img: Twitter, link: 'https://twitter.com/SuperFoodz' },
  { img: Discord, link: 'https://discord.com/invite/VKRNrkdA3k' },
  { img: Instagram, link: 'https://www.instagram.com/superfoodzcafe/' },
  { img: Telegram, link: 'https://t.me/SuperFoodzCafe' }
]

const NavBar = (props) => {
  const location = useLocation();

  useEffect(() => {
    $(document).ready(function () {
      if (location.hash === "#navbar") {
        window.scrollTo(0, $('#navbar')[0].offsetTop);
      }
    })
  }, [location.pathname])


  const target = useRef(null);
  const navLink1 = [
    { link: "BUY SUPERFOODZ", to: "BUYSUPERFOODZ" },
    { link: "ROADMAP", to: "ROADMAP" },
    { link: "NFT", to: "NFT" },
    { link: "CAFE", to: "CAFE" },
    { link: "TEAM", to: "TEAM" }
  ]
  const navLink2 = [
    { link: "BUY SUPERFOODZ", to: '/BuySuperFoodz' },
    { link: "CONTACT", to: '/contact' }
  ]

  const [open, setOpen] = useState(null)
  const handleOpenNavMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setOpen(null);
  };

  const opened = Boolean(open);
  const id = open ? 'simple-popover' : undefined;


  return (
    < >

      <AppBar id="navbar" sx={{
        backgroundColor: "#72DBD4",
        position: "relative",
        zIndex: "1",

      }}>
        <Box sx={{ display: 'flex', width: "95%", padding: 0, margin: "5px auto", justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Mobile Secreens */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '95%', margin: "auto", position: "relative", alignItems: 'center', justifyContent: 'space-between' }}>
            <Link to="/#navbar" className='navbar-brand' >
              <img src={Logo} alt="Logo" width="100px" height="90px" srcSet={Logo} />
            </Link>
            <Overlay target={target.current} show={open} placement="bottom">
              <Tooltip id="swap1" {...props} className="custom_Tooltip">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleCloseNavMenu}
                  color="inherit"
                  sx={{
                    width: "100%",
                    display: { xs: "flex", md: "none" },
                    justifyContent: { xs: "flex-end", md: 'none' },
                  }}
                >
                  <CloseIcon sx={{ color: '#111' }} />
                </IconButton>
                {!props.button && navLink1.map((data, index) => {
                  return (
                    <>
                      {props.name ?
                        <Link className="nav-link m-1 py-2 px-3" key={index} to={`${data.to === "CAFE" ? "#" : `/#${data.to}`}`}>{data.link}</Link>
                        :
                        <a className="nav-link m-1 py-2 px-3" key={index} href={`/#${data.to}`}>{data.link}</a>
                      }
                    </>
                  )
                })}
                {props.button && navLink2.map((link, index) => {
                  return (
                    <Link className="nav-link m-1 py-2 px-3" key={index} to={link.to}>{link.link}</Link>
                  )
                })}
                {!props.button &&
                  <div className="nanLink_container absolute ">
                    {social.map((data, index) => {
                      return (
                        <a className="nav-link" key={index} target="_blank" href={data.link}>
                          <img src={data.img} alt="Logo" width="20px" srcSet={data.img} />
                        </a>
                      )
                    })}
                  </div>
                }
              </Tooltip>
            </Overlay>
            <Button
              aria-describedby={id}
              style={{ backgroundColor: "transparent", border: "none", outline: "none" }}
              ref={target}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{ color: '#111' }} />
            </Button>
          </Box>

          {/* Tablet/PC  Screens */}
          <Box sx={{ width: '100%', justifyContent: 'space-between', gap: '34px', display: { xs: 'none', md: 'flex' }, alignItems: 'center', padding: "10px 0" }}>
            <Link to="/#navbar" className='navbar-brand' >
              <img src={Logo} alt="Logo" width="100px" srcSet={Logo} />
            </Link>
            <div className="nanLink_container" style={{ marginRight: '305px' }}>

              {!props.button && navLink1.map((data, index) => {
                return (
                  <>
                    {props.name ?
                      <Link className="nav-link m-1 py-2 px-3" key={index} to={`${data.to === "CAFE" ? "#" : `/#${data.to}`}`}>{data.link}</Link> :
                      <a className="nav-link m-1 py-2 px-3" key={index} href={`/#${data.to}`}>{data.link}</a>
                    }
                  </>
                )
              })}
              {props.button && navLink2.map((link, index) => {
                return (
                  <Link className="nav-link m-1 py-2 px-3" key={index} to={link.to}>{link.link}</Link>
                )
              })}
            </div>

            {!props.button &&
              <div className="nanLink_container absolute ">
                {social.map((data, index) => {
                  return (
                    <a className="nav-link" key={index} target="_blank" href={data.link}>
                      <img src={data.img} alt="Logo" width="20px" srcSet={data.img} />
                    </a>
                  )
                })}
              </div>
            }
          </Box>
        </Box>
      </AppBar>
      <div className="image-container">
        {props.img && <img src={props.img} alt="MainSection" srcSet={props.img} />}
      </div>
    </>
  )
}

export default NavBar