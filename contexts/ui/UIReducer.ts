import { UIState } from './';

type UIActionType = 
| { type: '[UI] - Open Sidebar' }
| { type: '[UI] - Close Sidebar' }
| { type: '[UI] - Toggle isAddingEntry' }
| { type: '[UI] - Toggle isDragging' }

export const UIReducer = ( state: UIState, action: UIActionType) => {
  switch (action.type) {
    case '[UI] - Open Sidebar':
      return {
        ...state,
        sidebarOpen: true
      }

    case '[UI] - Close Sidebar':
      return {
        ...state,
        sidebarOpen: false
      }

    case '[UI] - Toggle isAddingEntry':
      return {
        ...state,
        isAddingEntry: !state.isAddingEntry,
      }

    case '[UI] - Toggle isDragging':
      return {
        ...state,
        isDragging: !state.isDragging,
      }

    default:
      return state;
  }
}
