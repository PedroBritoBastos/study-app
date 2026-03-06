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

// pega todas as tasks da schedule pelo id
export async function getTasks(scheduleId: string) {
  const response = await fetch(`/api/schedules/${scheduleId}/scheduleTasks`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar tasks da schedule");
  }

  return response.json();
}

interface CreateScheduleTaskProps {
  title: string;
  executionTime?: Date | null;
}

// cria uma scheduleTask
export async function createScheduleTask(
  data: CreateScheduleTaskProps,
  scheduleId: string,
) {
  const response = await fetch(`/api/schedules/${scheduleId}/scheduleTasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseMessage = await response.json();

  if (!response.ok) {
    throw new Error("Erro ao criar task: " + responseMessage);
  }

  return response;
}

// deleta uma scheduleTask
export async function deleteScheduleTask(
  scheduleId: string,
  scheduleTaskId: string,
) {
  const response = await fetch(
    `/api/schedules/${scheduleId}/scheduleTasks/${scheduleTaskId}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    },
  );

  const responseApi = await response.json();

  if (!response.ok) {
    throw new Error("Erro ao deletar task: ", responseApi);
  }

  return responseApi;
}
