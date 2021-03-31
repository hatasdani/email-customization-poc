import React from "react";
import { Text as T } from "@instructure/ui-elements";
import { TextArea } from "@instructure/ui-forms";
import Block from "./BaseBlock";

const TYPE = "text"

const TITLE = "Text"

const Editor = ({value, onChange, onRemove}) => (
  <Block
    onRemove={onRemove}
    title={TITLE}
    component={
      <TextArea
        value={value} 
        onChange={(event) => onChange(event.target.value)}
      />
    }
  />
)

const Preview = ({value}) => {
  const paragraphs = value.split("\n")
  return (paragraphs.map(p=> <T as="p">{p}</T>))
}

const Text = {Editor, Preview, TYPE, TITLE}
export default Text;