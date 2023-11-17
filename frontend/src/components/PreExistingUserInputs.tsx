// PreExistingUserInputs.tsx

import React from 'react';

interface PreExistingUserInputsProps {
  startChat: (initialMessage: string) => void;
}

const PreExistingUserInputs: React.FC<PreExistingUserInputsProps> = ({ startChat }) => {
  const preExistingInputs = [
    "Hello,",
    "How can I help you?",
    "Ask me anything!",
    // Add more pre-existing inputs as needed
  ];

  return (
    <div className="pre-existing-inputs-container">
      {preExistingInputs.map((input, index) => (
        <div key={index} onClick={() => startChat(input)}>
          {input}
        </div>
      ))}
    </div>
  );
};

export default PreExistingUserInputs;
