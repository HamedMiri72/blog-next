import Link from 'next/link';
import React from 'react'

export default function AuthLinks() {

  
  const status = "notauthenticated";
  return (
    <>
    {status === "notauthenticated" ?(

      <Link href="/login">Login</Link>
    

    ):(
      <>
      <Link href="/write">Write</Link>
      <span>LogOut</span>

      </>

    )}

    </>
  );
}
