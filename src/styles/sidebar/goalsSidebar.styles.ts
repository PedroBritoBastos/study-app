export const styles = {
  container: {
    justify: "space-between",
    h: "100%",
    gap: 8,
  },
  statusText: {
    fontSize: "md",
    color: "purple.600",
  },
  tasksStack: {
    my: 4,
    bg: "rgba(237, 242, 247, 1)",
    p: 4,
    borderRadius: "md",
    gap: 4,
  },
  task: {
    bg: "white",
    borderRadius: "md",
    py: 2,
    px: 4,
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.25)",
  },
  deleteButton: {
    bg: "purple.600",
    _hover: { bg: "purple.400" },
  },
  progressContainer: {
    gap: 8,
    mb: 4,
  },
  progressIndicator: {
    textAlign: "center",
    fontSize: "4xl",
    fontWeight: "bold",
    color: "purple.700",
  },
  progressBar: {
    track: {
      height: "1.8rem",
    },
    range: {
      bg: "purple.600",
      color: "white",
    },
  },
};
