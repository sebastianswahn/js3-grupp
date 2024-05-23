'use client'

import AuthProvider from "@/components/ui/auth-provider";

function RootLayout({ children }) {

  return (


    <div>
      <AuthProvider>
        {children}
      </AuthProvider>
    </div>

  )
}

export default RootLayout