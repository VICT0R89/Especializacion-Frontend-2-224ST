import { useState } from 'react'

interface useToggleType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useToggle = (initialState: boolean = false): useToggleType => {

  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const open = (): void => setIsOpen(true);
  const close = (): void => setIsOpen(false);
  const toggle = (): void => setIsOpen(prevState => !prevState);

  return {isOpen, open, close, toggle};
}
