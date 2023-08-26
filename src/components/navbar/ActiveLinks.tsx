"use client";
// https://twitter.com/ixahmedxii/status/1685373873150402560?s=20
import clsx from "clsx";
import { usePathname } from "next-intl/client";
import Link from "next-intl/link";
import { AnchorHTMLAttributes, forwardRef } from "react";

// https://stackoverflow.com/a/76303101
type LinkProps = Parameters<typeof Link>[0];

type ActiveLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { activeClassName?: string };

const ActiveLink = forwardRef<HTMLAnchorElement, ActiveLinkProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const active = href === pathname;

    return (
      <Link
        ref={ref}
        href={href}
        className={clsx(
          className,
          active && activeClassName,
          active && "underline",
          "hover:shadow-none",
          "rounded-2xl bg-white px-2 md:px-5 py-1 shadow-lg transition-shadow"
        )}
        aria-current={active ? "page" : false}
        {...props}
      />
    );
  }
);

ActiveLink.displayName = "ActiveLink";

export { ActiveLink };
