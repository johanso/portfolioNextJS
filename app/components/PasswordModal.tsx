import { useState } from 'react';
import { IconCloseLg } from '../icons';
import { hashPassword } from '../utils/hash';

interface PasswordModalProps {
  onClose: () => void;
  onSubmit: (password: string) => void;
}

export const PasswordModal = ({ onClose, onSubmit }: PasswordModalProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hashedInput = await hashPassword(password);

    if (hashedInput === process.env.NEXT_PUBLIC_PROFESSIONAL_PASSWORD_HASH) {
      onSubmit(password);
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute right-4 top-4">
          <IconCloseLg size={16} />
        </button>
        
        <p className="text-gray-600 mb-4">Due to confidentiality agreements, I am unable to showcase my professional projects here. However, if you&apos;re interested, feel free to contact me, and I&apos;ll gladly share my professional portfolio with you.</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded p-2 mb-2"
            placeholder="Enter password"
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary text-white rounded py-2 hover:bg-primary/90"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};