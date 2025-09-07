"use client";

import { useState, useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Home,
  Users,
  Calendar,
  Heart,
  Package,
  BookOpen,
  LogIn,
  UserPlus,
  HandHeart,
} from "lucide-react";

export function Navbar() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsScrolledDown(true);
      } else {
        // Scrolling up
        setIsScrolledDown(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] isolate">
      {/* First Navbar - White Background */}
      <motion.nav 
        className="w-full bg-white border-b border-gray-200"
        initial={{ y: 0 }}
        animate={{ y: isScrolledDown ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-black">RunRise Nation</span>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors">
                <LogIn className="h-4 w-4" />
                <span className="text-sm font-medium">Sign In</span>
              </button>
              
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Second Navbar - Dark Background */}
      <motion.nav 
        className="w-full bg-[#0A0A0A] border-b border-white/10"
        initial={{ y: 0 }}
        animate={{ y: isScrolledDown ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            {/* Navigation Items */}
            <NavbarMenu />
          </div>
        </div>
      </motion.nav>
    </div>
  );
}

const NavbarMenu = () => {
  type Props = {
    id: number;
    label: string;
    subMenus?: {
      title: string;
      items: {
        label: string;
        description: string;
        icon: React.ElementType;
      }[];
    }[];
    link?: string;
  };

  const NAV_ITEMS: Props[] = [
    {
      id: 1,
      label: "Home",
      link: "#",
    },
    {
      id: 2,
      label: "About",
      link: "#",
    },
    {
      id: 3,
      label: "Events",
      subMenus: [
        {
          title: "Running Events",
          items: [
            {
              label: "Marathons",
              description: "Full and half marathon events",
              icon: Calendar,
            },
            {
              label: "5K Runs",
              description: "Quick and fun 5K races",
              icon: Calendar,
            },
            {
              label: "Virtual Runs",
              description: "Run anywhere, anytime",
              icon: Calendar,
            },
          ],
        },
        {
          title: "Training",
          items: [
            {
              label: "Bootcamps",
              description: "Intensive training sessions",
              icon: Users,
            },
            {
              label: "Pacer Groups",
              description: "Run with experienced pacers",
              icon: Users,
            },
            {
              label: "Workshops",
              description: "Learn running techniques",
              icon: BookOpen,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      label: "Engage",
      subMenus: [
        {
          title: "Community",
          items: [
            {
              label: "Stories",
              description: "Read inspiring running stories",
              icon: BookOpen,
            },
            {
              label: "Leaderboard",
              description: "See top performers",
              icon: Users,
            },
            {
              label: "Challenges",
              description: "Join community challenges",
              icon: Heart,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      label: "Race",
      link: "#",
    },
    {
      id: 6,
      label: "Blog",
      link: "#",
    },
  ];

  const [openMenu, setOpenMenu] = React.useState<string | null>(null);

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel);
  };

  const [isHover, setIsHover] = useState<number | null>(null);
  
  // Function to calculate menu offset based on menu item position
  const getMenuOffset = (menuLabel: string) => {
    const menuIndex = NAV_ITEMS.findIndex(item => item.label === menuLabel);
    const totalItems = NAV_ITEMS.length;
    const itemWidth = 120; // Approximate width of each menu item
    const totalWidth = totalItems * itemWidth;
    const centerOffset = totalWidth / 2;
    const itemOffset = (menuIndex * itemWidth) + (itemWidth / 2);
    return itemOffset - centerOffset;
  };
  
  return (
    <ul className="relative flex items-center space-x-0 overflow-x-auto">
      {NAV_ITEMS.map((navItem) => (
        <li
          key={navItem.label}
          className="relative"
          onMouseEnter={() => handleHover(navItem.label)}
          onMouseLeave={() => handleHover(null)}
        >
          <button
            className="text-sm py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-white/50 hover:text-white relative"
            onMouseEnter={() => setIsHover(navItem.id)}
            onMouseLeave={() => setIsHover(null)}
          >
            <span>{navItem.label}</span>
            {navItem.subMenus && (
              <ChevronDown
                className={`h-4 w-4 group-hover:rotate-180 duration-300 transition-transform
                ${openMenu === navItem.label ? "rotate-180" : ""}
                `}
              />
            )}
            {(isHover === navItem.id || openMenu === navItem.label) && (
              <motion.div
                layoutId="hover-bg"
                className="absolute inset-0 size-full bg-white/10"
                style={{
                  borderRadius: 99,
                }}
              />
            )}
          </button>

          <AnimatePresence>
            {openMenu === navItem.label && navItem.subMenus && (
              <div className="fixed inset-0 pointer-events-none z-[9999]">
                <div className="absolute top-32 left-0 right-0 flex justify-center pointer-events-auto">
                  <div className="relative" style={{ transform: `translateX(${getMenuOffset(navItem.label)}px)` }}>
                  <motion.div
                    className="bg-[#0A0A0A] border border-white/10 p-4 w-max"
                    style={{
                      borderRadius: 16,
                    }}
                    layoutId="menu"
                  >
                    <div className="w-fit shrink-0 flex space-x-9 overflow-hidden">
                      {navItem.subMenus.map((sub) => (
                        <motion.div layout className="w-full" key={sub.title}>
                          <h3 className="mb-4 text-sm font-medium capitalize text-white/50">
                            {sub.title}
                          </h3>
                          <ul className="space-y-6">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.label}>
                                  <a
                                    href="#"
                                    className="flex items-start space-x-3 group"
                                  >
                                    <div className="border border-white/30 text-white rounded-md flex items-center justify-center size-9 shrink-0 group-hover:bg-white group-hover:text-[#0A0A0A] transition-colors duration-300">
                                      <Icon className="h-5 w-5 flex-none" />
                                    </div>
                                    <div className="leading-5 w-max">
                                      <p className="text-sm font-medium text-white shrink-0">
                                        {item.label}
                                      </p>
                                      <p className="text-xs text-white/50 shrink-0 group-hover:text-white transition-colors duration-300">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  </div>
                </div>
              </div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
};
