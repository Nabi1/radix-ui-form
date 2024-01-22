"use client";

import "./styles.css";
import { CheckIcon } from "@radix-ui/react-icons";
import { Props } from "./types";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import React from "react";

export function Checkbox({ label, checked, onCheckedChange }: Props) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <RadixCheckbox.Root
        className="CheckboxRoot"
        defaultChecked={checked}
        onCheckedChange={onCheckedChange}
        id={label}
      >
        <RadixCheckbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label className="Label" htmlFor={label}>
        {label}
      </label>
    </div>
  );
}
