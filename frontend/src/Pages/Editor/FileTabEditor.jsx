import React from 'react'
import Sidebar from '../../Components/Sidebar'
import CodeEditor from './CoreEditor'

export default function FileTabEditor() {
  return (
    <div className='flex'>
        <Sidebar/>
        <CodeEditor />
    </div>
  )
}
