import { IconButton } from "@chakra-ui/react"

type Props = {
  children: React.ReactNode;
  handleClose: () => void;
}

export function CloseButton({ children, handleClose }: Props) {
  return <IconButton variant={"ghost"} onClick={() => handleClose()}  >
    {children}
  </IconButton>
}