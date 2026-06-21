'use client'

interface EntryWrapperProps {
  children: React.ReactNode;
}

export function EntryWrapper({ children }: EntryWrapperProps) {
  // Directly render children without the loading animation overlay
  return <>{children}</>;
}
