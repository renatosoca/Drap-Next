import { createContext } from 'react';

export interface ContextProps {
  sidebarOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  
  handleCloseSidebar: () => void;
  handleOpenSidebar: () => void;
  handleToggleisAddingEntry: () => void;
  handleToggleisDragging: () => void;
}

export const UIContext = createContext( {} as ContextProps );