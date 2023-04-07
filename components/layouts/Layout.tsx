import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material'
import { NavBar, SideBar } from '../ui';

export interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<LayoutProps> = ({ title = 'Jira Next', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }} >
      <Head>
        <title>{ title }</title>
      </Head>

      <NavBar />
      <SideBar />

      <Box sx={{ padding: '1rem 2rem'}} >
        { children }
      </Box>

    </Box>
  )
}
