import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className='flex items-center justify-start'>
      <ol className='flex items-center space-x-4'>
        {items.map((item, index) => (
          <li key={index} className='flex items-center'>
            {item.href ? (
              <a href={item.href} className='text-gray-400 hover:text-gray-500'>
                {item.label}
              </a>
            ) : (
              <span className='text-gray-900'>{item.label}</span>
            )}
            {index !== items.length - 1 && (
              <svg className='w-3 h-3 mx-2 text-gray-300' fill='currentColor' viewBox='0 0 12 12'>
                <path d='M10.293 4.293a1 1 0 010 1.414L7.414 8l2.879 2.879a1 1 0 01-1.414 1.414L6 9.414l-2.879 2.879a1 1 0 01-1.414-1.414L4.586 8 1.707 5.121a1 1 0 011.414-1.414L6 6.586l2.879-2.879a1 1 0 011.414 0z' />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export { Breadcrumb };
