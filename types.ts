export type ProcessStatus = 'manual' | 'error' | 'success' | 'cloud' | 'automation';

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  iconType: string; // Mapping to Lucide icon names
  status: ProcessStatus;
  details: string[];
  painPoints?: string[]; // Only for AS-IS
  benefits?: string[]; // Only for TO-BE
}

export interface MetricData {
  name: string;
  asIs: number;
  toBe: number;
  unit: string;
}
