import { useState } from "react";

export function useNavbar() {
  const [active, setActive] = useState<number>(0);

  return { active, setActive };
}
