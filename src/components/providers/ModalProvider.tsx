'use client';

/**
 * To share the NiceModal context across all client components
 */
import NiceModal from '@ebay/nice-modal-react';

export function ModalProvider({ children }: { children: React.ReactNode }) {
  return <NiceModal.Provider>{children}</NiceModal.Provider>;
}
