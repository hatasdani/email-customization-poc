import React from "react";
import { Button } from "@instructure/ui-buttons";
import { Menu } from "@instructure/ui-menu";
import { View } from "@instructure/ui-layout";
import {IconPlusLine} from "@instructure/ui-icons";
import { getTypes, getTitle } from './blocks/BlockMapper';

const BLOCK_TYPES = getTypes();

const NewContent = ({onAdd}) => {
  return (
    <View padding="small" textAlign="center" overflowY="visible" overflowX="visible">
    <Menu
      onSelect={(_, value) => onAdd(value)}
      placement="bottom"
      trigger={(
        <Button variant="ghost" fluidWidth icon={IconPlusLine}>
          New Content Block
        </Button>)
      }
    >
      {BLOCK_TYPES.map((blockType) => (<Menu.Item value={blockType}>{getTitle(blockType)}</Menu.Item>))}
    </Menu>
  </View>    
  )
}

export default NewContent