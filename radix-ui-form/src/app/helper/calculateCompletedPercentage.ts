import { Category } from "../shared/types";

export const calculateCompletedPercentage = (data: Category[]): number => {
  const totalValue = data.reduce((acc, category) => {
    return (
      acc + category.tasks.reduce((taskAcc, task) => taskAcc + task.value, 0)
    );
  }, 0);

  const normalizedValue = data.reduce((acc, category) => {
    return (
      acc +
      category.tasks.reduce((taskAcc, task) => {
        return task.checked
          ? taskAcc + (task.value * 100) / totalValue
          : taskAcc;
      }, 0)
    );
  }, 0);

  return Math.floor(normalizedValue);
};
