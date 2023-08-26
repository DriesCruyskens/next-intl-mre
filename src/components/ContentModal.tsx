"use client";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useCallback, useEffect, useRef } from "react";
import RoundLocaleSwitcher from "./navbar/RoundLocaleSwitcher";

export default function ContentModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    // This is necessary to prevent the body from scrolling while this modal is open.
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed bottom-0 left-0 right-0 top-0 z-20 overflow-scroll p-2 pt-4 backdrop-blur-xl  md:p-10"
      onClick={onClick}
    >
      <div className="right-5 top-10 mb-4 flex w-full justify-end md:absolute">
        <RoundLocaleSwitcher />

        <button
          onClick={onDismiss}
          type="button"
          className="rounded-full bg-white p-3 shadow-lg transition-shadow hover:cursor-pointer hover:shadow-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div ref={wrapper} className="m-auto w-full md:h-full md:w-11/12">
        {children}
      </div>
    </div>
  );
}
