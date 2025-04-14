import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav>
        <Link rel="stylesheet" href="/" className="felx items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={38} height={32} />
        </Link>
        <h2 className="text-primary-100">PrepVision</h2>
      </nav>

      {children}
    </div>
  );
};

export default RootLayout;
