import React from "react";
import { Heading } from "@instructure/ui-elements";
import { TextInput } from "@instructure/ui-text-input";
import Block from "./BaseBlock";

const TYPE = "subtitle"

const TITLE = "Subtitle"

const Editor = ({value, onChange, onRemove}) => (
  <Block
    onRemove={onRemove}
    title={TITLE}
    component={
      <TextInput
        value={value} 
        onChange={(event) => onChange(event.target.value)}
      />
    }
  />
)

const Preview = ({value}) => (<Heading level="h3">{value}</Heading>)

const Subtitle = {Editor, Preview, TYPE, TITLE}
export default Subtitle