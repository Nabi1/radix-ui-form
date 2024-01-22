"use client";

import React, { ReactElement, forwardRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";

import "./styles.css";

export const AccordionContent = forwardRef(
  (
    {
      children,
      className,
      ...props
    }: { children: ReactElement; className?: string },
    forwardedRef
  ) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef as any}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionTrigger";
