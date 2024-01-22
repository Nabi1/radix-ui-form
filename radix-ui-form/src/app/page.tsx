"use client";
import { useMemo } from "react";
import errorAnimation from "react-useanimations/lib/error";
import loadingAnimation from "react-useanimations/lib/loading";
import UseAnimations from "react-useanimations";

import "./styles.css";
import { Accordion } from "./components/Accordion/Accordion";
import { calculateCompletedPercentage } from "./helper/calculateCompletedPercentage";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";
import { TaskProvider } from "./TaskContext";
import { Title } from "./components/Title/Title";
import { useFetchWithCookie } from "./hooks/useFetchWithCookie";
import { Particles } from "./components/Particles/Particles";

export default function Home() {
  const { data, loading, error } = useFetchWithCookie(
    "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress",
    "categories"
  );
  const initialPercentage = useMemo(
    () => calculateCompletedPercentage(data),
    [data]
  );

  return (
    <>
      <Particles />
      <div className="Main">
        {loading ? (
          <UseAnimations
            animation={loadingAnimation}
            autoplay={true}
            size={25}
          />
        ) : error ? (
          <UseAnimations animation={errorAnimation} autoplay={true} size={25} />
        ) : (
          <div className="Card">
            <Title label="Grouped Tasks" />
            <TaskProvider
              initialData={{ data, completedPercentage: initialPercentage }}
            >
              <ProgressBar />
              <Accordion />
            </TaskProvider>
          </div>
        )}
      </div>
    </>
  );
}
