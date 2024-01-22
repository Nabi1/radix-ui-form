import React, { ReactElement, forwardRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { BackpackIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

import "./styles.css";

export const AccordionTrigger = forwardRef(
  (
    { children, className, ...props }: { className?: string; children: string },
    forwardedRef
  ) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef as any}
      >
        <div className="wrapTitle">
          <BackpackIcon />
          {children}
        </div>
        <div className="AccordionChevronWrapper">
          <div className="AccordionShow">Show</div>
          <div className="AccordionHide">Hide</div>

          <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";
