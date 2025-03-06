import { useState } from 'react'
import './App.css'
import explorer from "./data/folderData"
import Folder from "./components/Folder"
import useTraverseTree from './hooks/use-traverse-tree';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, itemName, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, itemName, isFolder)

    setExplorerData(finalTree)
  };

   

  console.log(explorerData)

  return (<div className="App">
    <Folder handleInsertNode={handleInsertNode} explorer={explorerData}/>
  </div>)
}

export default App
