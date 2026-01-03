export type SubjectGetById = {
  params: {
    id: string;
  };
};

export type SubjectId = {
  params: { params: Promise<{ id: string }> };
};
