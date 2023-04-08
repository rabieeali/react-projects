// import { useState } from "react";

// type Tab = {
//   label: string;
//   content: React.ReactNode;
// };

// type Props = {
//   tabs: Tab[];
// };

// const Tabs: React.FC<Props> = ({ tabs }) => {
//   const [activeTabIndex, setActiveTabIndex] = useState(0);

//   const handleTabClick = (index: number) => {
//     setActiveTabIndex(index);
//   };

//   return (
//     <div>
//       <div className="flex border-b border-gray-200 mb-4">
//         {tabs.map((tab, index) => (
//           <button
//             key={index}
//             className={`${
//               index === activeTabIndex
//                 ? "border-blue-500 text-blue-600"
//                 : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//             } whitespace-no-wrap pb-4 px-1 mr-4 border-b-2 font-medium text-sm focus:outline-none`}
//             onClick={() => handleTabClick(index)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>
//       <div>
//         {tabs.map((tab, index) => (
//           <div
//             key={index}
//             className={`${index === activeTabIndex ? "block" : "hidden"}`}
//           >
//             {tab.content}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tabs;




import { useState } from "react";

type Tab = {
  label: string;
  content: React.FC;
};

type Props = {
  tabs: Tab[];
};

const Tabs: React.FC<Props> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
      <div className="flex border-b border-gray-200 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeTabIndex
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            } whitespace-no-wrap pb-4 px-1 mr-4 border-b-2 font-medium text-sm focus:outline-none`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${index === activeTabIndex ? "block" : "hidden"}`}
          >
            <tab.content />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;