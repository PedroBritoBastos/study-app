import { Flex, Text, Icon } from "@chakra-ui/react";
import { CheckButton } from "./CheckButton";
import { DeleteButton } from "./DeleteButton";
import { Clock } from "lucide-react";

interface Props {
   name: string;
   isChecked: boolean;
}

const styles = {
   container: {
      bg: "white",
      borderRadius: "md",
      justifyContent: "space-between"
   },
   timeContainer: {
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
      bg: "purple.600",
      color: "white",
      borderRadius: "md",
      flex: 1
   },
   taskContainer: {
      py: 3,
      px: 6,
      flex: 6,
      justifyContent: "space-between",
      alignItems: "center"
   },
   optionsContainer: {
      alignItems: "center",
      gap: 4
   }
}

export function Task({
   name,
   isChecked
}: Props) {
   return <Flex {...styles.container}>
      <Flex {...styles.taskContainer}>
         {/* nome da task */}
         <Text color={"gray.700"}>{name}</Text>

         {/* options */}
         <Flex {...styles.optionsContainer}>
            <CheckButton />
            <DeleteButton />
         </Flex>
      </Flex>

      {/* horario */}
      <Flex {...styles.timeContainer}>
         <Icon size={"md"}>
            <Clock />
         </Icon>
         <Text>12:00</Text>
      </Flex>

   </Flex>
}