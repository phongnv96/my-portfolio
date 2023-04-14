import './_style.css'

import React, { useCallback, useEffect, useRef, useState } from "react";

interface TextEffectProps {
  data: string[];
  time?: number;
  loop?: number;
  timeChange?: number;
}

export default function TextEffect(props: TextEffectProps) {
  const { data, time = 200, loop = 0, timeChange = 3000 } = props;
  const elText = useRef<any>();
  const loopRef = useRef<number>(0);
  const isDeleteRef = useRef<boolean>(false);
  const isDone = useRef<boolean>(false);

  const handleText = useCallback(
   async (text: string, period: number, isDelete: boolean) => {
      let i = loopRef.current % data.length;
      const routeText = data[i];
      let currentText = routeText.substring(0, text.length + 1);
      let timeCount = time - Math.random() * 100;
      if (isDelete) {
        currentText = routeText.substring(0, text.length - 1);
        timeCount /=2;
      }
      if (!isDelete && currentText.length === routeText.length) {
        timeCount = period;
        isDelete = true;
      } else if (isDelete && currentText === '') {
        isDelete = false;
        loopRef.current++;
      }
      elText.current.innerText = currentText;
      const timer = await setTimeout(() => {
        handleText(
          currentText,
          period,
          isDelete
        );
        isDeleteRef.current = isDelete;
        clearTimeout(timer);
      }, timeCount);
    },
    [data, time]
  );
  useEffect(() => {
    loopRef.current = loop;
     handleText(elText.current.innerText, timeChange, isDeleteRef.current);
     return (() => {
     })
  }, [data, handleText, loop, timeChange]);
  return (
    <div>
      <span ref={elText} className="text-content"></span>
      <span className="wrap"></span>
    </div>
  );
}
