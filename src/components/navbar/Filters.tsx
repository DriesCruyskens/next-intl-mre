"use client";


import clsx from "clsx";
import { usePathname } from "next-intl/client";
import Link from "next-intl/link";
import { PropsWithChildren } from "react";

export function Filters({
  menuItems,
  showMeText,
}: {
  menuItems: { href: string; name: string }[];
  showMeText: string;
}) {
  const pathname = usePathname();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="rounded-2xl bg-white px-3 md:px-5 py-1 shadow-lg transition-shadow hover:shadow-none">
        {showMeText}:{" "}
        <span className="underline">
          {menuItems.find((value) => value.href == pathname)?.name}
        </span>
      </Menu.Button>
      <Menu.Items className="absolute z-10 mt-2 flex flex-col rounded-2xl bg-white shadow-lg">
        {menuItems.map((item) => {
          return (
            <Menu.Item key={item.name} disabled={item.href === pathname}>
              {({ active }) => (
                <MenuItem
                  active={active}
                  current={item.href === pathname}
                  href={item.href}
                >
                  {item.name}
                </MenuItem>
              )}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

function MenuItem({
  children,
  active,
  current,
  href,
}: PropsWithChildren<{ active: boolean; href: string; current: boolean }>) {
  return (
    <Link href={href} aria-current={current ? "page" : false}>
      <div
        className={clsx(
          active && "bg-black text-white",
          !current && "hover:bg-black hover:text-white",
          current && " underline",
          "rounded-2xl px-2 md:px-5 py-3"
        )}
      >
        {children}
      </div>
    </Link>
  );
}
