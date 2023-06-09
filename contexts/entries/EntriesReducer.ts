import { Entry } from '@/interfaces';
import { EntriesState } from './';

type EntriesActionType = 
| { type: '[Entry] - Add-Entry', payload: Entry }
| { type: '[Entry] - Updated-Entry', payload: Entry }
| { type: '[Entry] - Refresh-Entries', payload: Entry[] }

export const EntriesReducer = ( state: EntriesState, { type, payload }: EntriesActionType) => {
  switch (type) {
    case '[Entry] - Add-Entry':
      return {
        ...state,
        entries: [...state.entries, payload]
      }

    case '[Entry] - Updated-Entry':
      return {
        ...state,
        entries: state.entries.map(entry => entry._id === payload._id ? payload : entry)
      }

    case '[Entry] - Refresh-Entries':
      return {
        ...state,
        entries: [...payload]
      }

    default:
      return state;
  }
}
