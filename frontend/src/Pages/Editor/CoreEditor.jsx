import React from 'react';
import  MonacoEditor  from '@monaco-editor/react';

const CodeEditor= () => {
    return (
        <div className='h-[90vh]'>
            <MonacoEditor
                height="100%"
                width="100%"
                theme="vs-dark"  // Dark theme like VS Code
                defaultLanguage="javascript"  // Default language
                defaultValue="// Start coding here..."
                options={{
                    selectOnLineNumbers: true,
                    autoIndent: 'full',
                    wordWrap: 'on',
                    minimap: { enabled: true },
                    fontSize: 14,
                    fontFamily: 'Consolas, "Courier New", monospace',
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    smoothScrolling: true,
                }}
            />
        </div>
    );
};

export default CodeEditor;
