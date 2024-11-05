// 'use client';

import Link from 'next/link';
import React from 'react';
import TooltipItem from '../Tooltip';
import { SidebarItemProps } from '@/types';

const SidebarItem = ({
  label,
  icon,
  path,
  active,
  isSidebarExpanded
}: SidebarItemProps) => {
  return (
    <>
      {isSidebarExpanded ? (
        <Link
          href={path}
          className={`relative flex h-full items-center whitespace-nowrap rounded-md ${
            active
              ? 'font-base bg-secondary text-sm font-bold text-outline-focus shadow-sm'
              : 'text-outline hover:bg-secondary hover:text-outline-focus/70'
          }`}
        >
          <div className="font-base relative flex flex-row items-center space-x-2 rounded-md px-2 py-2 text-sm duration-100">
            {icon}
            <span>{label}</span>
          </div>
        </Link>
      ) : (
        <Link
          href={path}
          className={`relative flex h-full items-center whitespace-nowrap rounded-md ${
            active
              ? 'bg-secondary text-sm text-outline-focus'
              : 'text-outline hover:bg-secondary hover:text-outline-focus/70'
          }`}
        >
          <div className="relative flex flex-row items-center space-x-2 rounded-md p-2 text-sm duration-100">
            {icon}
          </div>
        </Link>
      )}
    </>
  );
};

export default SidebarItem;
