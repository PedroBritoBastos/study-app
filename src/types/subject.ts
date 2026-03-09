export type SubjectType = {
  id: string;
  title: string;
  content: string;
  currentDate: string | Date;
  userId: string;
};

export type SubjectProps = {
  subject: SubjectType;
};
