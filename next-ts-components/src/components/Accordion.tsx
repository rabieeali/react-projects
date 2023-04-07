import { Minus } from './icons/Minus';
import { Plus } from './icons/Plus';

// import React, { useState } from 'react';

// interface AccordionProps {
//   title: string;
//   children: React.ReactNode;
// }

// const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className='border border-gray-200 rounded-lg'>
//       <button
//         className='flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50'
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span>{title}</span>
//         <div>{isOpen ? <Minus /> : <Plus />}</div>
//         {/* <svg className={`${isOpen ? 'transform rotate-180' : ''} w-5 h-5`} viewBox='0 0 20 20' fill='currentColor'>
//           <path
//             fillRule='evenodd'
//             d='M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
//             clipRule='evenodd'
//           />
//         </svg> */}
//       </button>
//       {isOpen && <div className='p-4 bg-gray-50'>{children}</div>}
//     </div>
//   );
// };

// export default Accordion;

import React, { useState } from 'react';

interface AccordionProps {
    title: string;
    isOpen?: boolean;
    children: React.ReactNode;
  }

const Accordion: React.FC<AccordionProps> = ({ title, isOpen = false, children }) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(isOpen);
  
    return (
      <div className="border border-gray-200 rounded-lg">
        <button
          className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50"
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        >
          <span>{title}</span>
          <svg
            className={`${isAccordionOpen ? "transform rotate-180" : ""} w-5 h-5`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isAccordionOpen && (
          <div className="p-4 bg-gray-50">{children}</div>
        )}
      </div>
    );
  };

interface AccordionGroupProps {
  title: string;
  children: React.ReactNode;
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({ title, children }) => {
  return (
    <div className='border border-gray-200 rounded-lg mb-4'>
      <div className='bg-gray-100 px-4 py-2 rounded-t-lg'>{title}</div>
      <div className='p-4'>{children}</div>
    </div>
  );
};

export { Accordion, AccordionGroup };
