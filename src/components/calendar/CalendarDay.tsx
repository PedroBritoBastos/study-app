import { Card, Text } from "@chakra-ui/react";

type Props = {
  date: Date;
};

export function CalendarDay({ date }: Props) {
  return (
    <Card.Root bg="white">
      <Card.Header>
        <Text fontWeight="bold">
          {date.getDate()}
        </Text>
      </Card.Header>
    </Card.Root>
  );
}
