// src/components/blog/LiveCode.js
import React, { useState, useEffect, useRef } from 'react';

const LiveCode = ({ initialCode }) => {
  const [code, setCode] = useState(initialCode || '// Write your code here');
  const [output, setOutput] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const outputEndRef = useRef(null);

  // Scroll to bottom of output whenever new content is added
  useEffect(() => {
    if (outputEndRef.current) {
      outputEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [output]);

  // Override console.log to capture output
  const runCode = () => {
    setIsRunning(true);
    setOutput([]);
    
    // Save the original console methods
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;

    // Override console methods to capture output
    const logs = [];
    console.log = (...args) => {
      originalLog(...args);
      logs.push({ type: 'log', content: args.map(arg => formatOutput(arg)).join(' ') });
    };
    console.warn = (...args) => {
      originalWarn(...args);
      logs.push({ type: 'warn', content: args.map(arg => formatOutput(arg)).join(' ') });
    };
    console.error = (...args) => {
      originalError(...args);
      logs.push({ type: 'error', content: args.map(arg => formatOutput(arg)).join(' ') });
    };

    try {
      // Execute the code
      // eslint-disable-next-line no-new-func
      const result = new Function(code)();
      
      // If the code returns a value, show it
      if (result !== undefined) {
        logs.push({ type: 'result', content: formatOutput(result) });
      }
      
      setOutput(logs);
    } catch (error) {
      setOutput([...logs, { type: 'error', content: error.toString() }]);
    } finally {
      // Restore original console methods
      console.log = originalLog;
      console.warn = originalWarn;
      console.error = originalError;
      setIsRunning(false);
    }
  };

  // Format different types of output
  const formatOutput = (value) => {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value, null, 2);
      } catch (error) {
        return value.toString();
      }
    }
    return value.toString();
  };

  return (
    <div className="my-6 border border-gray-300 rounded-md overflow-hidden">
      {/* Code editor */}
      <div className="bg-gray-100 p-2 border-b border-gray-300 flex justify-between items-center">
        <span className="font-mono text-sm">JavaScript</span>
        <button
          onClick={runCode}
          disabled={isRunning}
          className={`px-3 py-1 rounded text-white text-sm ${
            isRunning ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isRunning ? 'Running...' : 'Run'}
        </button>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-48 p-4 font-mono text-sm outline-none resize-none bg-gray-900 text-gray-200"
      />

      {/* Output console */}
      <div className="bg-black text-white p-4 font-mono text-sm max-h-48 overflow-y-auto">
        {output.length === 0 ? (
          <div className="text-gray-500">// Output will appear here after running the code</div>
        ) : (
          output.map((line, index) => (
            <div 
              key={index} 
              className={`whitespace-pre-wrap mb-1 ${
                line.type === 'error' 
                  ? 'text-red-400' 
                  : line.type === 'warn' 
                    ? 'text-yellow-400' 
                    : line.type === 'result' 
                      ? 'text-purple-400' 
                      : 'text-green-400'
              }`}
            >
              {line.content}
            </div>
          ))
        )}
        <div ref={outputEndRef} />
      </div>
    </div>
  );
};

export default LiveCode;