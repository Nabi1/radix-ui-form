import React, { createContext, useContext, useReducer, ReactNode } from "react";

import { calculateCompletedPercentage } from "./helper/calculateCompletedPercentage";
import { Category, Task } from "./shared/types";

interface TaskContextType {
  data: Category[];
  completedPercentage: number;
  dispatch: React.Dispatch<ActionType>;
}

interface TaskProviderProps {
  children: ReactNode;
  initialData: { data: Category[]; completedPercentage: number };
}

interface ActionType {
  type: string;
  payload: {
    categoryName: string;
    taskDescription: string;
    checked: boolean;
  };
}

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

const taskReducer = (
  state: { data: Category[]; completedPercentage: number },
  action: ActionType
) => {
  switch (action.type) {
    case "TOGGLE_TASK":
      const newData = state.data.map((category: Category) => {
        if (category.name === action.payload.categoryName) {
          return {
            ...category,
            tasks: category.tasks.map((task: Task) => {
              if (task.description === action.payload.taskDescription) {
                return { ...task, checked: action.payload.checked };
              }
              return task;
            }),
          };
        }
        return category;
      });
      const completedPercentage = calculateCompletedPercentage(newData);

      return {
        data: newData,
        completedPercentage,
      };
    default:
      return state;
  }
};

export const TaskProvider: React.FC<TaskProviderProps> = ({
  children,
  initialData,
}) => {
  const [state, dispatch] = useReducer(taskReducer, initialData);

  return (
    <TaskContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
