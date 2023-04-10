import { Entry } from '@/interfaces';
import { FC, ReactNode, useEffect, useReducer } from 'react';
import { EntriesContext, EntriesReducer } from './';
import axios from 'axios';

export interface Props {
  children: ReactNode;
}
export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
}

export const EntriesProvider: FC<Props> = ({ children }) => {

  const [ state, dispatch ] = useReducer( EntriesReducer, Entries_INITIAL_STATE);

  const handleAddNewEntry = async (description: string) => {
    const { data } = await axios.post<Entry>('http://localhost:3000/api/entries', { description });
    dispatch({ type: '[Entry] - Add-Entry', payload: data });
  }

  const handleUpdateEntry = async (entry: Entry) => {
    const { data } = await axios.put<Entry>(`http://localhost:3000/api/entries/${entry._id}`, entry);

    dispatch({ type: '[Entry] - Updated-Entry', payload: data });
  }

  const handleRefreshEntries = async () => {
    const { data } = await axios.get<Entry[]>('http://localhost:3000/api/entries');
    dispatch({ type: '[Entry] - Refresh-Entries', payload: data });
  }

  useEffect(() => {
    handleRefreshEntries();
  }, [])
  
  
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
