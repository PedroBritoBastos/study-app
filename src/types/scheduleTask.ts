export interface ScheduleTaskProps {
  id: string;
  title: string;
  isChecked: boolean;
  executionTime: string | null;
  scheduleId: string;
}
