"use client";

import React from "react";
import { Text } from "@radix-ui/themes";

import { Props } from "./types";

export function Title({ label }: Props) {
  return (
    <Text size="4" weight="bold" ml="3">
      {label}
    </Text>
  );
}
