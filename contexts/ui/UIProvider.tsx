import { FC, ReactNode, useReducer } from 'react';
import { UIContext, UIReducer } from './';

export interface Props {
  children: ReactNode;
}
export interface UIState {
  sidebarOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidebarOpen: false,
  isAddingEntry: false,
  isDragging: false,
}

export const UIProvider: FC<Props> = ({ children }) => {

  const [ UIstate, dispatch ] = useReducer( UIReducer, UI_INITIAL_STATE);

  const handleCloseSidebar = () => dispatch({ type: '[UI] - Close Sidebar' });

  const handleOpenSidebar = () => dispatch({ type: '[UI] - Open Sidebar' });

  const handleToggleisAddingEntry = () => dispatch({ type: '[UI] - Toggle isAddingEntry' });

  const handleToggleisDragging = () => dispatch({ type: '[UI] - Toggle isDragging' });

  return (
    <UIContext.Provider value={{
      ...UIstate,
      handleCloseSidebar,
      handleOpenSidebar,
      handleToggleisAddingEntry,
      handleToggleisDragging,
    }}>
      { children }
    </UIContext.Provider>
  )
}