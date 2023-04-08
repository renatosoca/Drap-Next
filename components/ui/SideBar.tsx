import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { InboxOutlined, MailOutlined } from '@mui/icons-material';
import { useUi } from '@/hooks';

const menuItems: string[] = ['Inbox', 'Starred', 'Send email', 'Drafts']

export const SideBar = () => {

  const { sidebarOpen, handleCloseSidebar } = useUi();
  
  return (
    <Drawer
      anchor='left'
      open={sidebarOpen}
      onClose={ handleCloseSidebar }
    >
      <Box sx={{ width: '15rem'}}>
        <Box sx={{ padding: '.5rem 1rem'}}>
          <Typography variant='h6' fontWeight={600} >Menú</Typography>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={item} button>
              <ListItemIcon>
                {index % 2 ? <InboxOutlined /> : <MailOutlined />}
              </ListItemIcon>

              <ListItemText primary={ item } />
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {menuItems.map((item, index) => (
            <ListItem key={item} button>
              <ListItemIcon>
                {index % 2 ? <InboxOutlined /> : <MailOutlined />}
              </ListItemIcon>

              <ListItemText primary={ item } />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
