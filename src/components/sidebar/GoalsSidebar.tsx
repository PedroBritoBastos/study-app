import { SidebarContainer } from "./SidebarContainer";

import { GoalType } from "@/src/types/goal";

interface Props {
  closeSidebar: () => void;
  goal: GoalType;
}

export function GoalsSidebar({ closeSidebar, goal }: Props) {
  return <SidebarContainer header={goal.title} closeSidebar={closeSidebar}>
    www
  </SidebarContainer>
}