import { useState } from 'react';
import { Accordion, AccordionGroup } from './components/Accordion';
import { Breadcrumb } from './components/Breadcrumb';
import { Modal } from './components/Modal';
import Button from './components/Button';
import Countdown from './components/Countdown';
import Tabs from './components/Tabs';
import MyCustomComponent from './components/MyCustomComponent';
import Divider from './components/Divider';
// import Carousel from './components/Carousel';

const App: React.FC = () => {
  const items = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Article' }];
  const targetDate = '2023-12-31T23:59:59';

  const tabs = [
    {
      label: 'Tab 1',
      content: MyCustomComponent,
    },
    {
      label: 'Tab 2',
      content: () => <p>This is the content for Tab 2</p>,
    },
    {
      label: 'Tab 3',
      content: () => <p>This is the content for Tab 3</p>,
    },
  ];

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
      {/* <>
        <button onClick={handleOpenModal}>Open Modal</button>
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <h2 className='text-lg font-medium mb-4'>Modal Title</h2>
          <p className='text-gray-600'>This is the content of the modal. You can put any HTML or React component here.</p>
          <button className='mt-4' onClick={handleCloseModal}>
            Close Modal
          </button>
        </Modal>
      </> */}

      <div>
        <Button>Click me!</Button>
        <Button variant='outline'>Click me too!</Button>
        <Button disabled>Can't click me!</Button>
      </div>

      {/* <div>
        <Carousel images={images=[]} autoplay interval={5000} />
      </div> */}

      <div>
        <h1>Countdown to New Year's Eve</h1>
        <Countdown targetDate={targetDate} />
      </div>

      <div>
        <Tabs tabs={tabs} />
      </div>

      <hr />
      <hr />
      <hr />
      <div className='w-1/6'>
      <p>Some content above the divider</p>
      <Divider className="my-4" />
      <p>Some content below the divider</p>
    </div>
      <hr />
      <hr />
      <hr />
    </>
  );
};

export default App;
