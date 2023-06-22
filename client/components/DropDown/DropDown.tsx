'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import type {
  DropDownContext,
  DropDownMenuProps,
  DropDownMenuGroupProps,
  DropDownMenuList,
  DropDownPortalProps,
} from './types'
import styles from './DropDown.module.sass'
import { useAppDispatch } from 'store/hooks'
import { addFilter } from 'store/reducer/FiltersSlice'
import { FILTER_TYPES } from 'components/Filters/mock/Filters'
import { useLazyGetCinemaFilmsQuery } from 'store/reducer/FilmsApiSlice'

const DropDownContext = createContext<DropDownContext>({
  openedGroup: '',
  openGroup() {},
})

const DropDownMenu = ({ children }: DropDownMenuProps) => {
  const [openedGroup, setOpenedGroup] = useState('')

  const openGroup = useCallback((title: string) => {
    setOpenedGroup((activeTitle) => (activeTitle === title ? '' : title))
  }, [])

  return (
    <DropDownContext.Provider value={{ openedGroup, openGroup }}>
      {children}
    </DropDownContext.Provider>
  )
}

DropDownMenu.Group = function DropDownMenuGroup({
  title,
  placeholder,
  items,
  filterType,
}: DropDownMenuGroupProps) {
  const { openedGroup, openGroup } = useContext(DropDownContext)
  const [selected, setSelected] = useState('')
  const inputRef = useRef<HTMLDivElement | null>(null)
  const [offset, setOffset] = useState<DOMRect>()
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()
  const [getCinemaFilms] = useLazyGetCinemaFilmsQuery()

  const handleItemClick = (value: string, id: string) => {
    setSelected(value)
    if (filterType === FILTER_TYPES.cinema) {
      getCinemaFilms(id)
    }
    dispatch(addFilter({ type: filterType, value: id }))
  }

  useEffect(() => {
    const offsetData = inputRef.current?.getBoundingClientRect()
    setOffset(offsetData)
  }, [])

  useEffect(() => {
    setIsOpen(openedGroup === title)
  }, [openedGroup, title])

  useEffect(() => {
    const handleCloseOnOutside = (e: MouseEvent) => {
      const { target } = e
      if (
        target instanceof Element &&
        inputRef.current &&
        !inputRef.current.contains(target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleCloseOnOutside)

    return () => {
      document.removeEventListener('click', handleCloseOnOutside)
    }
  }, [])

  return (
    <div className={styles.select} onClick={() => openGroup(title)}>
      <p className={styles.select__searchLabel}>{title}</p>
      <div
        className={
          isOpen ? styles.select__placeholder_open : styles.select__placeholder
        }
        ref={inputRef}
      >
        {selected ? selected : placeholder}
        <span
          className={isOpen ? styles.select__icon_open : styles.select__icon}
        />
      </div>
      {isOpen && (
        <DropDownPortal offset={offset}>
          <DropDownMenu.List items={items} handleItemClick={handleItemClick} />
        </DropDownPortal>
      )}
    </div>
  )
}

DropDownMenu.List = function DropDownList({
  items,
  handleItemClick,
}: DropDownMenuList) {
  return (
    <ul className={styles.select__list}>
      {items.map((opt) => (
        <li
          key={opt.id}
          value={opt.name}
          id={opt.id}
          className={styles.select__listItem}
          onClick={() => handleItemClick(opt.name, opt.id)}
        >
          {opt.name}
        </li>
      ))}
    </ul>
  )
}

const DropDownPortal = ({ children, offset }: DropDownPortalProps) => {
  const root = document.getElementById('portal') as HTMLElement
  const modalOffsetPosition = useMemo(() => {
    const position = { left: 0, top: 0, width: 0 }
    if (offset) {
      position.left = offset?.left
      position.top = offset?.top + offset?.height
      position.width = offset?.width
      return position
    }
  }, [offset])

  return createPortal(
    <div style={{ position: 'fixed', ...modalOffsetPosition }}>{children}</div>,
    root
  )
}

export default DropDownMenu
