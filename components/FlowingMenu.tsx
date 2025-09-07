import React from 'react';

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image }) => {
  const repeatedMarqueeContent = React.useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className="text-[#060010] uppercase font-normal text-sm leading-[1.2] whitespace-nowrap px-[1vw]">{text}</span>
        <div
          className="w-[200px] h-[4vh] mx-[2vw] rounded-[50px] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </React.Fragment>
    ));
  }, [text, image]);

  return (
    <div className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff]">
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white text-sm"
        href={link}
      >
        <div className="h-full w-[200%] flex">
          <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </a>
    </div>
  );
};

export default FlowingMenu;

// Note: this is also needed
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       translate: {
//         '101': '101%',
//       },
//       keyframes: {
//         marquee: {
//           'from': { transform: 'translateX(0%)' },
//           'to': { transform: 'translateX(-50%)' }
//         }
//       },
//       animation: {
//         marquee: 'marquee 15s linear infinite'
//       }
//     }
//   },
//   plugins: [],
// };
