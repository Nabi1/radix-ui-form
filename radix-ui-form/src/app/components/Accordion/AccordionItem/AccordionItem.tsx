import React, { useCallback, useContext } from "react";
import * as Accordion from "@radix-ui/react-accordion";

import "./styles.css";
import { AccordionContent } from "../AccordionContent/AccordionContent";
import { AccordionTrigger } from "../AccordionTrigger/AccordionItem";
import { Checkbox } from "../../Checkboxes/Cheboxes";
import { Task } from "@/app/shared/types";
import { useTasks } from "../../../TaskContext";

export function AccordionItem({
  label,
  tasks,
}: {
  label: string;
  tasks: Task[];
}) {
  const { dispatch } = useTasks();

  const handleCheckboxChange = useCallback(
    (taskDescription: string, checked: boolean) => {
      dispatch({
        type: "TOGGLE_TASK",
        payload: {
          categoryName: label,
          taskDescription,
          checked,
        },
      });
    },
    [label, dispatch]
  );

  const renderAccordionItemContent = useCallback(
    ({ description, value, checked }: Task) => {
      return (
        <AccordionContent key={value}>
          <Checkbox
            label={description}
            checked={checked}
            onCheckedChange={(newChecked) =>
              handleCheckboxChange(description, newChecked)
            }
          />
        </AccordionContent>
      );
    },
    [handleCheckboxChange]
  );

  return (
    <Accordion.Item className="AccordionItem" value={label}>
      <AccordionTrigger>{label}</AccordionTrigger>
      {tasks.map(renderAccordionItemContent)}
    </Accordion.Item>
  );
}
