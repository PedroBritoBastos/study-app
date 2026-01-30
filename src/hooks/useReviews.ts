import { SubjectType } from "../types/subject";
import { daysSinceCreation } from "../utilities/dateUtils";

export function useReviews() {
  // essa funcao verifica se a matéria possui revisão nesse dia e retorna true caso tenha
  function verifyIfSubjectHasReviewsInTheCurrentDate(
    subject: SubjectType,
    currentDate: Date,
  ): boolean {
    // verifica quantos dias se passaram desde a data de criacao
    const days = daysSinceCreation(new Date(subject.currentDate), currentDate);

    // verifica se a quantidade de dias condiz com as condições necessárias para se ter revisão neste dia
    const fixedReviewDays = [1, 4, 11, 25, 55];

    if (fixedReviewDays.includes(days)) {
      return true;
    }

    if (days > 55 && (days - 55) % 30 === 0) {
      return true;
    }

    return false;
  }

  // essa funcao retorna todas as materias que possuem revisão
  function getReviewsInTheCurrentDate(
    subjects: SubjectType[],
    currentDate: Date,
  ): SubjectType[] {
    const reviews = subjects.filter((subject) =>
      verifyIfSubjectHasReviewsInTheCurrentDate(subject, currentDate),
    );
    return reviews;
  }

  return { getReviewsInTheCurrentDate };
}
