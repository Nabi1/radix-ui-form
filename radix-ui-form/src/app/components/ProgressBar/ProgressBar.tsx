"use client";

import React, { useEffect, useState } from "react";
import * as Progress from "@radix-ui/react-progress";
import thumbUp from "react-useanimations/lib/thumbUp";
import UseAnimations from "react-useanimations";

import "./styles.css";
import { useTasks } from "../../TaskContext";
import { ProgressBarColor } from "./type";

const determineProgressColor = (percentage: number) => {
  if (percentage > 75) return ProgressBarColor.Gold;
  if (percentage > 50) return ProgressBarColor.Green;
  if (percentage > 35) return ProgressBarColor.Blue;
  return ProgressBarColor.Base;
};

export function ProgressBar() {
  const { completedPercentage } = useTasks();
  const [progressColor, setProgressColor] = useState(ProgressBarColor.Base);

  useEffect(() => {
    setProgressColor(determineProgressColor(completedPercentage));

    const timer = setTimeout(() => {
      setProgressColor(ProgressBarColor.Base);
    }, 400);

    return () => clearTimeout(timer);
  }, [completedPercentage]);

  return (
    <div className="Wrapper">
      <Progress.Root
        className={`ProgressRoot ${progressColor}`}
        value={completedPercentage}
      >
        <Progress.Indicator
          className="ProgressIndicator"
          style={{ transform: `translateX(${completedPercentage}%)` }}
        />
        <span
          className="ProgressLabel"
          style={{ left: `${completedPercentage - 5}%` }}
        >
          {completedPercentage}%
        </span>
      </Progress.Root>
      {completedPercentage === 100 && (
        <UseAnimations animation={thumbUp} autoplay={true} size={25} />
      )}
    </div>
  );
}
