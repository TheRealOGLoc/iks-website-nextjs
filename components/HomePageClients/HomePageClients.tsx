"use client"
import { useEffect, useRef, useState } from "react";

interface HomePageClientsProps {
  componentData: {
    __component: string;
    titleLeftPart: string;
    titleRightPart: string;
    description: string;
    firstRow: {
      data: { attributes: { url: string; name: string } }[];
    };
    secondRow: {
      data: { attributes: { url: string; name: string } }[];
    };
    [key: string]: any;
  };
}

export default function HomePageClients({ componentData }: HomePageClientsProps) {
  const [firstIndex, setFirstIndex] = useState(1); // Start at 1st position
  const [secondIndex, setSecondIndex] = useState(1); // Start at 1st position
  const transitionDuration = 300; // Transition duration in ms
  const slideInterval = 3000; // Slide interval in ms

  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  const firstRow = componentData.firstRow.data;
  const secondRow = componentData.secondRow.data;

  // Normalize array length to a multiple of 6
  const normalizeArrayLength = (arr: any[], size: number) => {
    const normalizedArray = [...arr];
    while (normalizedArray.length % size !== 0) {
      normalizedArray.push(...arr); // Clone elements until length is a multiple of `size`
    }
    return normalizedArray;
  };

  const normalizedFirstRow = normalizeArrayLength(firstRow, 6);
  const normalizedSecondRow = normalizeArrayLength(secondRow, 6);

  // Clone arrays to handle infinite looping
  const firstRowCloned = [
    ...normalizedFirstRow.slice(-6),
    ...normalizedFirstRow,
    ...normalizedFirstRow.slice(0, 6),
  ];
  const secondRowCloned = [
    ...normalizedSecondRow.slice(-6),
    ...normalizedSecondRow,
    ...normalizedSecondRow.slice(0, 6),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstIndex((prevIndex) => prevIndex + 1);
      setSecondIndex((prevIndex) => prevIndex + 1);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [slideInterval]);

  useEffect(() => {
    // Handle first row looping logic
    if (firstIndex === firstRowCloned.length - 6) {
      setTimeout(() => {
        if (firstRowRef.current) {
          firstRowRef.current.style.transition = "none";
          setFirstIndex(6); // Reset index to the first cloned element
        }
      }, transitionDuration);
    } else if (firstRowRef.current) {
      firstRowRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    }

    // Handle second row looping logic (opposite direction)
    if (secondIndex === secondRowCloned.length - 6) {
      setTimeout(() => {
        if (secondRowRef.current) {
          secondRowRef.current.style.transition = "none";
          setSecondIndex(6); // Reset index to the first cloned element
        }
      }, transitionDuration);
    } else if (secondRowRef.current) {
      secondRowRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    }
  }, [firstIndex, secondIndex, transitionDuration]);

  return (
    <div className="mt-[100px] max-w-[1200px] m-auto">
      <div className="text-center">
        <div className="font-semibold text-5xl poppins-font cyan-blue">
          {componentData.titleLeftPart} <span className="light-blue">{componentData.titleRightPart}</span>
        </div>
        <div className="inter-font text-xl max-w-[490px] m-[auto] font-medium my-2">
          {componentData.description}
        </div>
      </div>

      <div className="overflow-hidden my-[100px]">
        {/* First row scrolling right to left */}
        <div
          className="flex mb-4"
          ref={firstRowRef}
          style={{
            transform: `translateX(-${firstIndex * 33.33}%)`, // Move by 33.33% on mobile, 16.67% on larger screens
          }}
        >
          {firstRowCloned.map((logo, idx) => (
            <img 
              key={idx} 
              src={logo.attributes.url} 
              alt={logo.attributes.name} 
              className="w-[150px] md:w-[200px] h-auto"  // Adjust size for mobile (150px) and larger screens (200px)
            />
          ))}
        </div>

        {/* Second row scrolling left to right */}
        <div
          className="flex"
          ref={secondRowRef}
          style={{
            transform: `translateX(-${secondIndex * 33.33}%)`, // Move by 33.33% on mobile, 16.67% on larger screens
          }}
        >
          {secondRowCloned.map((logo, idx) => (
            <img 
              key={idx} 
              src={logo.attributes.url} 
              alt={logo.attributes.name} 
              className="w-[150px] md:w-[200px] h-auto"  // Adjust size for mobile (150px) and larger screens (200px)
            />
          ))}
        </div>
      </div>
    </div>
  );
}
