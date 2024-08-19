import React from 'react';
import { useClerk } from '@clerk/clerk-react';

const SignUpButton: React.FC = () => {
  const { redirectToSignUp } = useClerk();

  return (
    <button onClick={() => redirectToSignUp()} className="bg-orange-400 hidden md:block text-white p-2 rounded cursor-pointer hover:bg-orange-300">
      Get started
    </button>
  );
};

export default SignUpButton;
