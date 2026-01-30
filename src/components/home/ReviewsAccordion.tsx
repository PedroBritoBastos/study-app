// styles
import { styles } from "@/styles/home/reviewsAccordion.styles";

// components
import { Stack, Button, Flex, Box, Text } from "@chakra-ui/react"
import { Bell } from "lucide-react";

// hooks
import { useState } from "react";
import { useReviews } from "@/src/hooks/useReviews";

// types
import { SubjectType } from "@/src/types/subject";


export function ReviewsAccordion({ subjects }: { subjects: SubjectType[] }) {
  const [active, setActive] = useState<boolean>(false);

  const reviewsHook = useReviews();
  const reviews = reviewsHook.getReviewsInTheCurrentDate(subjects, new Date());

  return (
    <Stack {...styles.container}>
      {/* botão que ativa o accordion */}
      <Flex {...styles.buttonContainer}>
        <Button {...styles.button} {...(active && styles.buttonActive)} onClick={() => setActive(!active)}>
          <Bell />
        </Button>
      </Flex>

      {/* sinal de aviso */}
      {reviews && <Box {...styles.buttonWarning}></Box>}

      {/* stack de revisões */}
      <Stack
        {...styles.reviewsStack}
        {...(active && styles.reviewsStackActive)}
      >
        <Box {...styles.review.container}>
          <Text {...styles.review.header}>Revisões hoje</Text>
        </Box>
        {reviews.map((review) => (
          <Box key={review.id} {...styles.review.container}>
            <Text {...styles.review.title}>{review.title}</Text>
          </Box>
        ))}
      </Stack>

    </Stack>
  );
}