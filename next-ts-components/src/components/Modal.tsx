import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className='fixed z-50 inset-0 overflow-y-auto' ref={modalRef} onClick={handleOverlayClick}>
          <div className='flex items-center justify-center min-h-screen px-4'>
            <div className='fixed inset-0 bg-gray-500 opacity-75'></div>
            <div className='bg-white rounded-lg overflow-hidden shadow-xl max-w-2xl w-full mx-auto p-6' onKeyDown={handleKeyDown} tabIndex={0}>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Modal };
