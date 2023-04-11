import { FC } from 'react'
import Link from 'next/link';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'
import { useUi } from '@/hooks';

export const NavBar: FC = () => {

  const { handleOpenSidebar } = useUi();

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
          onClick={ handleOpenSidebar }
        >
          <MenuOutlined />
        </IconButton>

        <Link href='/' passHref >
          <Typography variant='h6' fontWeight={600} >OpenJira</Typography>
        </Link>

      </Toolbar>
    </AppBar>
  )
}
