import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreatePromptPage = () => {
  const [input, setInput] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handler = (event) => {
    if (event.keyCode === 13) {
      handleChatInput();
    }
  };

  const handleChatInput = () => {
    // Implement your logic for handling user input
    // This function can be similar to the handleChatInput in ChatBox.js
    // You can update 'generatedText' state with the AI-generated text
    // For now, I'm setting it to a static value, replace it with your actual logic
    setGeneratedText("AI generated text goes here");
  };

  return (
    <div className="py-5 h-screen flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-between items-center p-3 bg-blue-500 text-white rounded-t-lg">
            <Link to="/">
              <i className="fas fa-angle-left"></i>
            </Link>
            <p className="mb-0 font-bold">Live chat</p>
            <Link to="/">
              <i className="fas fa-times"></i>
            </Link>
          </div>
          <div className="p-4" style={{ height: 'calc(100% - 60px)' }}>
            <div className="mb-3">
              <strong>AI Generated Text:</strong>{' '}
              {generatedText || 'Placeholder if no generated text'}
            </div>

            <form>
              <div className="mb-3">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Type your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={input}
                  placeholder="Type your message…"
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => handler(e)}
                  className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleChatInput}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePromptPage;

