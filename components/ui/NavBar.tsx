import { FC } from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'

export const NavBar: FC = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton>
          <MenuOutlined />
        </IconButton>

        <Typography variant='h6' fontWeight={600} >OpenJira</Typography>
      </Toolbar>
    </AppBar>
  )
}
