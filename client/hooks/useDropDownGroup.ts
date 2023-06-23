import { useState, useRef, useCallback, useEffect } from "react"

const useDropDownGroup = () => {
  const [selected, setSelected] = useState('');
  const inputRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState<DOMRect>();
  const [groupIsOpen, setGroupIsOpen] = useState(false);

  const handleSelectedItem = useCallback((value: string) => {
    setSelected(value)
  }, []);

  useEffect(() => {
    const offsetData = inputRef.current?.getBoundingClientRect()
    setOffset(offsetData);
  }, [])

 
  useEffect(() => {
    const handleCloseOnOutside = (e: MouseEvent) => {
      const { target } = e;
      if (
        target instanceof Element &&
        inputRef.current &&
        !inputRef.current.contains(target)
      ) {
        setGroupIsOpen(false);
      }
    }
    document.addEventListener('click', handleCloseOnOutside)

    return () => {
      document.removeEventListener('click', handleCloseOnOutside)
    }
  }, []);

  return {groupIsOpen, setGroupIsOpen, offset, inputRef, selected, handleSelectedItem}
}

export default useDropDownGroup;