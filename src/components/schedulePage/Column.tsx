import { Stack, Text, Box, Separator, Flex } from "@chakra-ui/react"



const styles = {
  container: {
    gap: 0
  },
  dateContainer: {
    //height: "50px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 4
  },
  date: {
    width: "fit-content",
    position: "absolute",
    px: 2,
    zIndex: 3,
    letterSpacing: 1,
    fontWeight: "semibold",
    color: "gray.500",
    fontSize: "md",
    bg: "#ecebf3ff"
  },
  separator: {
    position: "absolute",
    width: "100%",
    height: "2px",
    bg: "gray.400",
  },
  decorativeCircle: {
    bg: "gray.400",
    width: "5px",
    height: "10px",
    position: "absolute"
  },
  decorativeCircleLeft: {
    left: 0,
    borderRadius: "0 50% 50% 0"
  },
  decorativeCircleRight: {
    right: 0,
    borderRadius: "50% 0% 0% 50%"
  },
  scheduleTasksContainer: {
    flex: 1,
    ml: 1.5,
    mr: 1.5,
    bg: "rgba(255, 255, 255, 0.7)",
    borderRadius: "md"
  },
  dayOfWeek: {
    textAlign: "center",
    bg: "purple.600",
    color: "white",
    py: 1,
    fontSize: "xs",
    letterSpacing: 1.5,
    fontWeight: "semibold",
    borderRadius: "md",
    ml: 1.5,
    mr: 1.5,
    mb: 3,
    mt: 3
  }
}

interface Props {
  date: string;
  dayOfWeek: string;
}

export function Column({ date, dayOfWeek }: Props) {
  return <Stack {...styles.container} >

    {/* date container */}
    <Box {...styles.dateContainer}>
      <Separator {...styles.separator} />
      <Text {...styles.date}>{date}</Text>
      <Box {...styles.decorativeCircle} {...styles.decorativeCircleLeft}></Box>
      <Box {...styles.decorativeCircle} {...styles.decorativeCircleRight}></Box>
    </Box>

    <Text {...styles.dayOfWeek}>{dayOfWeek}</Text>
    {/* schedule tasks container */}
    <Stack {...styles.scheduleTasksContainer}>

    </Stack>
  </Stack>
}