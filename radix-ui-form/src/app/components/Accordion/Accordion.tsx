import React, { useCallback } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";

import "./styles.css";
import { AccordionItem } from "./AccordionItem/AccordionItem";
import { Task } from "@/app/shared/types";
import { useTasks } from "@/app/TaskContext";

export function Accordion() {
  const { data } = useTasks();

  const renderAccordionItem = useCallback(
    ({ name, tasks }: { name: string; tasks: Task[] }) => {
      return <AccordionItem key={name} label={name} tasks={tasks} />;
    },
    []
  );

  return (
    <RadixAccordion.Root
      className="AccordionRoot"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      {data.map(renderAccordionItem)}
    </RadixAccordion.Root>
  );
}
