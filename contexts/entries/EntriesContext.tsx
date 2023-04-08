import { Entry } from '@/interfaces';
import { createContext } from 'react';

export interface ContextProps {
  entries: Entry[];
  
  handleAddNewEntry: (description: string) => void;
  handleUpdateEntry: (payload: Entry) => void;
}

export const EntriesContext = createContext( {} as ContextProps );