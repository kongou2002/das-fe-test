import React, { useState } from "react";

interface HistogramData {
  label: string;
  value: number;
}

interface HistogramProps {
  data: HistogramData[];
  barColor?: string;
  barWidth?: number;
  barGap?: number;
}

const Chart: React.FC<HistogramProps> = ({
  data,
  barColor = "steelblue",
  barWidth = 30,
  barGap = 10,
}) => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="histogram-container">
      <svg
        className="histogram-chart"
        width={data.length * (barWidth + barGap)}
        height={maxValue + 60}
      >
        {data.map((d, i) => {
          const height = (d.value / maxValue) * (maxValue + 20);
          const x = i * (barWidth + barGap);
          const y = maxValue + 20 - height;
          const isHovered = hoveredBar === i;

          return (
            <rect
              className="histogram-bar"
              key={i}
              x={x}
              y={y}
              width={barWidth}
              height={height}
              fill={isHovered ? "orange" : barColor}
              onMouseEnter={() => setHoveredBar(i)}
              onMouseLeave={() => setHoveredBar(null)}
            />
          );
        })}
      </svg>
      <div className="histogram-labels">
        {data.map((d, i) => {
          return (
            <div className="histogram-label" key={i}>
              <div>{d.label}</div>
              <div
                className="histogram-label-value"
                style={{ fontWeight: "lighter" }}
              >
                {d.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chart;
