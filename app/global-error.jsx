"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    if (error) {
      Sentry.captureException(error);
    } else {
      console.warn("No error object found to capture.");
    }
  }, [error]);

  const statusCode = error?.statusCode || 500;

  return (
    <html>
      <body>
        <Error statusCode={statusCode} title={error?.message || "An error occurred"} />
      </body>
    </html>
  );
}
