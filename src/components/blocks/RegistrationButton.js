import React from "react";
import { Button } from "@instructure/ui-buttons";
import Block from "./BaseBlock";

const TYPE="registration_button"

const TITLE = "Complete Registration Button"

const Editor = ({onRemove}) => (
  <Block
    onRemove={onRemove}
    title={TITLE}
    component={null}
  />
)

const Preview = () => (
  <Button variant="primary">
    Complete Registration
  </Button>
)

const RegistrationButton = {Editor, Preview, TYPE, TITLE}

export default RegistrationButton