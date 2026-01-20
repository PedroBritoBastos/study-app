import { Stack, Button } from "@chakra-ui/react";

// hooks
import { useDaySidebarContext } from "@/src/hooks/useDaySidebarContext";
import { useCalendar } from "@/src/hooks/useCalendar";

export function Sidebar() {
  const { sidebarHook } = useDaySidebarContext();
  const { setActiveDay } = useCalendar();

  if (!sidebarHook.isOpen) return null;

  // fecha a sidebar e desmarca a data ativa
  function handleClick() {
    setActiveDay(new Date());
    sidebarHook.close();
  }

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
      <ul className="list-none">
        {sidebarHook.reviews}
      </ul>
      <Button onClick={handleClick}>
        Close
      </Button>
    </Stack>
  );
}
