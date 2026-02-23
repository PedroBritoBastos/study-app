type Task = {
  title: string;
  executionTime?: string;
};

type ScheduleData = {
  scheduleDay: string;
  tasks?: Task[];
};

// cria um schedule
export async function createSchedule(data: ScheduleData) {
  const response = await fetch("/api/schedules/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar schedule");
  }

  return response.json();
}
