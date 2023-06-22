type DropDownContext = {
  openedGroup: string
  openGroup: (title: string) => void
}

type DropDownMenuProps = {
  children: React.ReactNode
}

type DropDownMenuGroupProps = {
  items: DropDownItemProps[]
  title: string
  placeholder: string
  filterType: string
}

type DropDownItemProps = {
  id: string
  name: string
}

type DropDownMenuList = {
  items: DropDownItemProps[]
  handleItemClick: (val: string, id: string) => void
}

type DropDownPortalProps = {
  children: React.ReactNode
  offset: DOMRect | undefined
}

export type {
  DropDownContext,
  DropDownMenuProps,
  DropDownMenuGroupProps,
  DropDownItemProps,
  DropDownMenuList,
  DropDownPortalProps,
}
