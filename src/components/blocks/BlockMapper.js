import React from "react";
import Text from "./Text";
import Title from "./Title";
import Subtitle from "./Subtitle";
import RegistrationButton from "./RegistrationButton";

const mapper = {
  [Text.TYPE]: Text,
  [Title.TYPE]: Title,
  [Subtitle.TYPE]: Subtitle,
  [RegistrationButton.TYPE]: RegistrationButton
}

export const getTypes = () => Object.keys(mapper);

export const getTitle = (type) => mapper[type].TITLE;

export const createEditor = (type, value, onChange, onRemove) => {
  const Editor = mapper[type].Editor
    return (
      <Editor
        onChange={onChange}
        onRemove={onRemove}
        value={value}
      />
    )
}

export const createPreview = (type, value) => {
  const Preview = mapper[type].Preview;
  return (<Preview value={value} />)
}
