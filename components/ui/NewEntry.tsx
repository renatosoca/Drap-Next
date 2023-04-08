import { ChangeEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material"
import { AddCircleOutlineOutlined, SaveOutlined } from "@mui/icons-material"
import { useEntry, useUi } from "@/hooks";

export const NewEntry = () => {
  const { handleAddNewEntry } = useEntry();
  const { isAddingEntry, handleToggleisAddingEntry } = useUi();

  const [inputValue, setInputValue] = useState('');
  const [touch, setTouch] = useState(false);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSaveEntry = () => {
    if (inputValue.trim().length === 0) return;
    handleAddNewEntry(inputValue);
    handleToggleisAddingEntry();
    setInputValue('');
    setTouch(false);
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>

      { isAddingEntry ? (
        <>
          <TextField 
            fullWidth
            sx={{ marginTop: 2, marginBottom: 2 }}
            placeholder='Nueva Entrada'
            autoFocus
            multiline
            label='Nueva entrada'
            helperText={touch && inputValue.length === 0 && 'Ingrese un valor'}
            value={ inputValue }
            onChange={ handleChangeInput }
            onBlur={ () => setTouch(true) }
            error={ touch && inputValue.length === 0 }
          />

          <Box display='flex' justifyContent='space-between' >
            <Button
              onClick={ handleToggleisAddingEntry }
              variant='outlined'
            >
              Cancelar
            </Button>

            <Button
              onClick={ handleSaveEntry }
              variant='outlined'
              color='primary'
              endIcon={<SaveOutlined />}
            >
              Nueva entrada
            </Button>
          </Box>
        </>
      ) : (
        <Button
          onClick={ handleToggleisAddingEntry }
          startIcon={<AddCircleOutlineOutlined />}
          fullWidth
          variant='outlined'
        >
          Nueva tarea
        </Button>
      )
      }

    </Box>
  )
}
