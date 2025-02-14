"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function AuthLinks() {
  const [open, SetOpen] = useState(false);
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className="hidden sm:block">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="hidden sm:block">
            Write
          </Link>
          <span className="hidden sm:block">LogOut</span>
        </>
      )}

      <button
        className="group h-[16px] w-[20px] rounded-lg sm:hidden"
        onClick={() => SetOpen(!open)}
      >
        <div className="grid justify-items-center gap-1.5">
          <span className="h-[2px] w-full rounded-full bg-black"></span>
          <span className="h-[2px] w-full rounded-full bg-black"></span>
          <span className="h-[2px] w-full rounded-full bg-black"></span>
        </div>
      </button>

      {open && (
        <div>
          <Link href={"/"}>HomePage</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>About</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span>LogOut</span>
            </>
          )}
        </div>
      )}

      {/* <div>
      <div></div>
      <div></div>
      <div></div>
    </div> */}
    </>
  );
}
