import { DragEvent, FC, useMemo } from 'react';
import { List, Paper } from '@mui/material';
import { useEntry, useUi } from '@/hooks';
import { EntryStatus } from '@/interfaces';
import { EntryCard } from './';
import style from './EntryList.module.css';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {

  const { isDragging, handleToggleisDragging } = useUi();
  const { entries, handleUpdateEntry } = useEntry();
  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

  const handleDropEntry = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    const entry = entries.find(entry => entry._id === id)!;
    
    handleUpdateEntry({ ...entry, status });
    handleToggleisDragging();
  }

  const handleAllowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }
  
  return (
    <div
      onDrop={ handleDropEntry }
      onDragOver={ handleAllowDrop }
      className={ isDragging ? style.dragging : ''}
    >
      <Paper sx={{ height: 'calc(100vh - 21rem)', overflow: 'auto', backgroundColor: 'transparent', padding: '.1rem .5rem' }}>
        <List 
          sx={{ opacity: isDragging ? .5 : 1, transition: 'all .3s' }}
        >
          { entriesByStatus.map( entry => (
            <EntryCard key={ entry._id } entry={ entry } />
          ))}
        </List>
      </Paper>
    </div>
  )
}
