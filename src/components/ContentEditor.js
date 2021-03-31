import React, { useState } from "react";
import { Flex } from "@instructure/ui-layout";
import { Heading } from "@instructure/ui-elements";
import { TextInput } from "@instructure/ui-text-input";
import { Button } from "@instructure/ui-buttons";
import BodyEditor from "./BodyEditor";
import Preview from "./Preview";

const ContentEditor = ({onSave}) => {
  const [subject, setSubject] = useState("")
  const [headline, setHeadline] = useState("")
  const [body, setBody] = useState([])


  const handleSave = () => (onSave({subject, headline, body}))
  const handleBodyChange = (changes) => (setBody(changes))

  return (
    <span>
      <Flex direction="column">
        <Flex.Item padding="small">
          <Heading>Email Content Editor</Heading>
        </Flex.Item>
        <Flex.Item padding="small">
          <TextInput
            onChange = { (event) => setSubject(event.target.value) }            
            label="Subject"
            value={subject}
          />
        </Flex.Item>
        <Flex.Item padding="small">
          <TextInput       
            onChange = {(event) => setHeadline(event.target.value)}    
            label="Headline"
            value={headline}
          />
        </Flex.Item>
        <Flex.Item padding="small">
          <Heading level="h3">Body</Heading>          
          <BodyEditor body={body} onChange={handleBodyChange}/>
        </Flex.Item>
        <Flex.Item padding="small">
          <Preview content={{subject, headline, body}} />
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </Flex.Item>
      </Flex>
      </span>
  )
}

export default ContentEditor