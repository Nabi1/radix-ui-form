export interface Task {
  description: string;
  value: number;
  checked: boolean;
}

export interface Category {
  name: string;
  tasks: Task[];
}
