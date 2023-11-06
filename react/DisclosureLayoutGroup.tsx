import React, { FC, useEffect, useState } from 'react'
import {
  DisclosureLayoutGroup,
  DisclosureLayoutGroupProps,
} from '@vtex/disclosure'

const Group: FC<DisclosureLayoutGroupProps> = ({ maxVisible, children }) => {
  const [visibleState, setVisibleState] = useState<any>('many')

  useEffect(() => {
    setVisibleState(maxVisible)
  }, [maxVisible])

  return (
    <DisclosureLayoutGroup maxVisible={visibleState}>
      {children}
    </DisclosureLayoutGroup>
  )
}

Group.displayName = 'DisclosureLayoutGroup'

export default Group
