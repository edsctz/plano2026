export enum TipCategory {
  ATTRACTION_INBOUND = 'Atração (Inbound)',
  ATTRACTION_OUTBOUND = 'Atração (Outbound)',
  CONVERSION = 'Conversão',
  BONUS = 'Bônus'
}

export interface TipData {
  id: number;
  title: string;
  subtitle: string;
  category: TipCategory;
  problem: string;
  solution: string;
  promptTemplate: string;
  tools: string[];
  roi: string;
  iconName: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
