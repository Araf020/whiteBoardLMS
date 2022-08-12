export interface Column {
  id: 'fName' | 'desc';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}
