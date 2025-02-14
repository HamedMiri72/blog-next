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
          <span className="h-[2px] w-full rounded-full bg-black dark:bg-white"></span>
          <span className="h-[2px] w-full rounded-full bg-black dark:bg-white"></span>
          <span className="h-[2px] w-full rounded-full  bg-black dark:bg-white"></span>
        </div>
      </button>

      {open && (
        <div className="flex flex-col absolute top-[100px] left-0 w-full h-[calc(100vh-100px)] items-center justify-center gap-[50px] text-[36px] transition duration-300 sm:hidden">
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
