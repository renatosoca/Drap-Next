import { useContext } from 'react';
import { UIContext } from '@/contexts/ui';

export const useUi = () => {
  return useContext(UIContext);
}
