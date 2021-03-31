import React from "react";
import { Flex, View } from "@instructure/ui-layout";
import { Heading } from "@instructure/ui-elements";
import { TextInput } from "@instructure/ui-text-input";
import { Button } from "@instructure/ui-buttons";
import { IconTrashLine, IconDragHandleLine } from "@instructure/ui-icons";

const RemoveIcon = <IconTrashLine color="error" size="x-small"/>

export const Stub = ({value, onChange, onRemove}) => (
  <Block
    onRemove={onRemove}
    title="Some title"
    component={
      <TextInput
        label="Some Label"
        value={value} 
        onChange={(event) => onChange(event.target.value)}
      />
    }
  />
)

export const Block = ({title, component, onRemove}) => {
  return (
    <View as="div" borderWidth="small" borderRadius="medium" overflowX="hidden" overflowY="hidden">
      <Flex direction="column" padding="xxx-small">
        <Flex.Item>
          <Flex padding="xxx-small">
            <Flex.Item>
              <IconDragHandleLine color="secondary" />
            </Flex.Item>
            <Flex.Item grow>
              <Heading level="h4">{title}</Heading>
            </Flex.Item>
            <Flex.Item>
              <Button variant="icon" icon={RemoveIcon} onClick={onRemove} />
            </Flex.Item>
          </Flex>
        </Flex.Item>
        {component && <Flex.Item padding="small">
          {component}
        </Flex.Item>}
      </Flex>
    </View>
  );
};

export default Block;
