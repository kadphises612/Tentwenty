export interface CreateTaskDto {
  date: string;
  name: string;
  type: string;
  project: string;
  description: string;
  durationHours: number;
}
