import { Stack } from "@chakra-ui/react";
import { useDaySidebarContext } from "@/src/hooks/useDaySidebarContext";

export function Sidebar() {
  const { sidebarHook } = useDaySidebarContext();

  if (!sidebarHook.isOpen) return null;

  return (
    <Stack
      w={{ base: "100%", md: "380px" }}
      pos="fixed"
      top={0}
      bottom={0}
      right={0}
      bg="white"
      zIndex={10}
      boxShadow="xl"
      borderLeft="1px solid"
      borderColor="gray.200"
      px={6}
      py={5}
      overflowY="auto"
    >
      {/* Conteúdo */}
    </Stack>
  );
}
