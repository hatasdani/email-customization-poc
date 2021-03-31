import React from "react";
import { Flex, View } from "@instructure/ui-layout";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { createEditor} from './blocks/BlockMapper';
import NewContent from "./NewContent";

const uniqueId = () => {
  let counter = 0
  return () => counter ++
}

const nextUniqueId = uniqueId()

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const createItem = (item, onChange, onRemove) => {
  return createEditor(
    item.type, 
    item.value, 
    (value) => onChange(item.id, value),
    () => onRemove(item.id)
  )
}

const BodyEditor = (props) => {
  const {body, onChange} = props;

  const handleAdd = (type) => {
    onChange([...body, {id: nextUniqueId(), value: "", type}])
  }

  const handleRemove = (id) => {
    onChange(body.filter(item => item.id !== id))
  }

  const handleChange = (id, value) => {
    const changed = body.map((item) => item.id === id ? {...item, value} : item)
    onChange(changed)
  }

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }
    const changed = reorder(body, result.source.index, result.destination.index);
    onChange(changed);
  }

  return (
    <Flex direction="column">
      <Flex.Item padding="small">
        <NewContent onAdd={handleAdd} />
      </Flex.Item>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {body.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={String(item.id)}
                  index={index}
                >
                  {(provided) => (                    
                      <View
                        as="div"
                        elementRef={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        padding="x-small"
                      >
                        {createItem(item, handleChange, handleRemove)}
                      </View>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Flex>
  );
};

export default BodyEditor;
