"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <>
      <div>{error.message} i am error i am not crashing the app </div>
      <button
        onClick={reload}
        className="border border-solid border-slate-200 p-2 rounded-md"
      >
        Reset
      </button>
    </>
  );
}
