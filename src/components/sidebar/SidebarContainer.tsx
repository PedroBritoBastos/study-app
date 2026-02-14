import { Stack, Flex, Heading } from "@chakra-ui/react";

// styles
import { styles } from "../../styles/sidebar/sidebarContainerStyles";
import scrollbarStyles from "@/styles/sidebar/scroll.module.css";

// components
import { CloseButton } from "../button/CloseButton";
import { MoveRight } from "lucide-react"

type Props = {
  children: React.ReactNode;
  closeSidebar: () => void;
  header: string;
}

export function SidebarContainer({ children, closeSidebar, header }: Props) {
  return (
    <Stack
      {...styles.container}
    >
      <Flex {...styles.header.container}>
        <Heading {...styles.header.heading}>{header}</Heading>
        <CloseButton handleClose={closeSidebar}>
          <MoveRight />
        </CloseButton>
      </Flex>

      <Stack {...styles.content} className={scrollbarStyles["sidebarScrollbar"]}>
        {children}
      </Stack>
    </Stack>
  );
}