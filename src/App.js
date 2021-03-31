import "@instructure/canvas-theme";
import React, { useState } from "react";
import { Flex } from "@instructure/ui-layout";

import ContentEditor from "./components/ContentEditor"

function App() {
  const [data, setData] = useState({})
  return (
    <div className="App">
      <Flex>
        <Flex.Item grow>{}</Flex.Item>
        <Flex.Item size="800px" margin="large" as="div">          
          <ContentEditor onSave={setData} />
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Flex.Item>
        <Flex.Item grow>{}</Flex.Item>
      </Flex>
    </div>
  );
}

export default App;
