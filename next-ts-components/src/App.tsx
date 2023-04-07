import { useState } from 'react';
import { Accordion, AccordionGroup } from './components/Accordion';
import { Breadcrumb } from './components/Breadcrumb';
import { Modal } from './components/Modal';

const App: React.FC = () => {
  const items = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Article' }];

  return (
    <>
      <div className='container mx-auto p-4'>
        <AccordionGroup title='Accordion Group Title'>
          <Accordion title='Accordion Title 1'>
            <p>This is the content of the first accordion.</p>
          </Accordion>
          <Accordion title='Accordion Title 2'>
            <p>This is the content of the second accordion.</p>
          </Accordion>
        </AccordionGroup>
        <AccordionGroup title='Another Accordion Group'>
          <Accordion title='Accordion Title 3' isOpen>
            <p>This is the content of the third accordion.</p>
          </Accordion>
          <Accordion title='Accordion Title 4'>
            <p>This is the content of the fourth accordion.</p>
          </Accordion>
        </AccordionGroup>
      </div>
      <hr />
      <hr />
      <hr />
      <Breadcrumb items={items} />

      <hr />
      <hr />
      <hr />
      <hr />
      <>
        <button onClick={handleOpenModal}>Open Modal</button>
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <h2 className='text-lg font-medium mb-4'>Modal Title</h2>
          <p className='text-gray-600'>This is the content of the modal. You can put any HTML or React component here.</p>
          <button className='mt-4' onClick={handleCloseModal}>
            Close Modal
          </button>
        </Modal>
      </>
    </>
  );
};

export default App;
