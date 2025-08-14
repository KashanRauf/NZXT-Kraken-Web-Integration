import { clampValue } from "utils/utils";

import { IProgressProps } from "./types";
import { Container } from "./styles";

export const Progress = (props: IProgressProps) => {
    const displaySize = window?.nzxt?.v1?.width ?? 144;
    const lineWidth = displaySize / 12;
    const thumbLineWidth = lineWidth;
    const leftValue = props.leftValue ?? 0;
    const rightValue = props.rightValue ?? 0;
    const size = displaySize ?? 150;
    const rad = size * .5 - lineWidth / 2;
    const circ = rad * 2 * Math.PI;

    const clampedLeftValue = clampValue(leftValue * .5, 0, 100 * 2, circ, 0);
    const clampedRightValue = clampValue(rightValue * .5, 0, 100 * 2, circ, 0);

    const leftThumbWidthScale = .35;
    const rightThumbWidthScale = .35;
    const circleWidthScale = 1;

    return (
    <Container>
      <svg width={`${size}px`} height={`${size}px`}>
        <defs>
          <linearGradient x1="50%" y1="100%" x2="0%" y2="0%" id="gradient-left">
            <stop
              stopColor="#8800ff"
              stopOpacity="0.5"
              offset="40%"
            ></stop>
            <stop
              stopColor="#4a157e"
              stopOpacity="1"
              offset="50%"
            ></stop>
          </linearGradient>

          <linearGradient x1="50%" y1="100%" x2="0%" y2="0%" id="gradient-right">
            <stop
              stopColor="#00bbff"
              stopOpacity="0.5"
              offset="30%"
            ></stop>
            <stop
              stopColor="#005e88"
              stopOpacity="1"
              offset="50%"
            ></stop>
          </linearGradient>
        </defs>

        <circle
          className="ring-background"
          cx={'50%'}
          cy={'50%'}
          r={`${rad}px`}
          strokeWidth={`${lineWidth * circleWidthScale}px`}
          stroke="#161616"
          style={{ opacity: 0}}
        />

        <g className="ring-thumb-left">
          <circle
            cx={'50%'}
            cy={'50%'}
            r={`${rad}px`}
            strokeWidth={`${thumbLineWidth * leftThumbWidthScale}px`}
            strokeDasharray={`${circ} ${circ}`}
            strokeDashoffset={clampedLeftValue}
            stroke="url(#gradient-left)"
          />
          <circle
            cx={'50%'}
            cy={'50%'}
            r={`${rad}px`}
            strokeWidth={`${thumbLineWidth * leftThumbWidthScale}px`}
            strokeDasharray={`${circ} ${circ}`}
            strokeDashoffset={clampedLeftValue}
            stroke="url(#gradient-left)"
          />
        </g>

        <g className="ring-thumb-right">
          <circle
            cx={'50%'}
            cy={'50%'}
            r={`${rad}px`}
            strokeWidth={`${thumbLineWidth * rightThumbWidthScale}px`}
            strokeDasharray={`${circ} ${circ}`}
            strokeDashoffset={clampedRightValue}
            stroke="url(#gradient-right)"
          />
          <circle
            cx={'50%'}
            cy={'50%'}
            r={`${rad}px`}
            strokeWidth={`${thumbLineWidth * rightThumbWidthScale}px`}
            strokeDasharray={`${circ} ${circ}`}
            strokeDashoffset={clampedRightValue}
            stroke="url(#gradient-right)"
          />
        </g>

        <foreignObject>
          <div className="ring-content">{props.children}</div>
        </foreignObject>
      </svg>
    </Container>
  );
}