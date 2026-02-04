export type SubjectType = {
  id: string;
  title: string;
  content: string;
  currentDate: string;
  userId: string;
};

export type SubjectProps = {
  subject: SubjectType;
};
