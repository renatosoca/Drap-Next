import React, { DragEvent, FC } from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '@/interfaces';
import { useUi } from '@/hooks';

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {

  const { handleToggleisDragging } = useUi();

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', entry._id);
    handleToggleisDragging();
  }

  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
    handleToggleisDragging();
  }

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={ handleDragStart }
      onDragEnd={ handleDragEnd }
    >
      <CardActionArea>
        <CardContent>
          <Typography variant='h6' sx={{ whiteSpace: 'pre-line'}} >{ entry.description }</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end'}}>
          <Typography variant='body2' color='text.secondary' >{ entry.createdAt }</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
