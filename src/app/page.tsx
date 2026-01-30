// components
import { HomeClient } from "../components/home/HomeClient";

// services
import { getSubjects } from "../services/subjectService";

export default async function Home() {
  const subjects = await getSubjects();

  return <>
    <HomeClient subjects={subjects} />
  </>
}
