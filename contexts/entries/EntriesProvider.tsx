import { Entry } from '@/interfaces';
import { FC, ReactNode, useReducer } from 'react';
import { EntriesContext, EntriesReducer } from './';

export interface Props {
  children: ReactNode;
}
export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: Math.random().toString(36).substring(2, 9),
      description: 'Pending Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      status: 'pending',
      createdAt: Date.now(),
    },
    
    {
      _id: Math.random().toString(36).substring(2, 9),
      description: 'In Progress Lorem ipsum elit. Quisquam, quod.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    
    {
      _id: Math.random().toString(36).substring(2, 9),
      description: 'Completed Lorem ipsum quod.',
      status: 'completed',
      createdAt: Date.now() - 100000,
    },
  ],
}

export const EntriesProvider: FC<Props> = ({ children }) => {

  const [ state, dispatch ] = useReducer( EntriesReducer, Entries_INITIAL_STATE);

  const handleAddNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: Math.random().toString(36).substring(2, 9),
      description,
      createdAt: Date.now(),
      status: 'pending',
    }
    dispatch({ type: '[Entry] - Add-Entry', payload: newEntry });
  }

  const handleUpdateEntry = (payload: Entry) => {
    dispatch({ type: '[Entry] - Updated-Entry', payload });
  }
  
  return (
    <EntriesContext.Provider value={{
      ...state,
      handleAddNewEntry,
      handleUpdateEntry
    }}>
      { children }
    </EntriesContext.Provider>
  )
}
