import React, { useState } from "react";
import { Heading } from "@instructure/ui-elements";
import { Flex } from "@instructure/ui-layout";
import { createPreview } from "./blocks/BlockMapper";
import { Button } from "@instructure/ui-buttons";
import { Modal } from "@instructure/ui-overlays";

const Preview = ({ content }) => {
  const [open, setOpen] = useState(false);
  const { headline, body } = content;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="light" onClick={handleOpen}>
        Show Preview
      </Button>
      <Modal open={open} onDismiss={handleClose} size="fullscreen">
        <Modal.Body>
            <Flex direction="column" padding="large">
              <Flex.Item padding="small">
                <Heading level="h1">{headline}</Heading>
              </Flex.Item>
              {body.map((block) => (
                <Flex.Item padding="small">{createPreview(block.type, block.value)}</Flex.Item>
              ))}
            </Flex>
        </Modal.Body>
        <Modal.Footer><Button onClick={handleClose}>Close</Button></Modal.Footer>
      </Modal>
    </>
  );
};

export default Preview;
