export type SubjectType = {
  id: string;
  title: string;
  content: string;
  currentDate: Date;
  userId: string;
};

export type SubjectProps = {
  subject: SubjectType;
};
