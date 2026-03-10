export type Dataset = {
  label: string;
  data: number[];
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
};

export type ChartDataType = {
    labels: string[];
    datasets: Dataset[];
};