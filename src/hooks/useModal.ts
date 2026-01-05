import { useState } from "react";

export function useModal() {
  // state de aberto / fechado do modal
  const [open, setOpen] = useState(false);

  return { setOpen };
}
