export interface AuthFormValues {
  fullName?: string;
  email: string;
  password: string;
  cPassword?: string;
}
export interface ContributeFormValues {
  contributeTo: `0x${string}`;
  amount: string;
  coin: string;
}
export interface ProjectFormValues {
  name: string;
  description: string;
  logo?: any;
  email: string;
  wallet: string;
  twitter: string;
  discord: string;
  telegram: string;
  website: string;
  goLive?: boolean;
  percentageCirculation: number;
  totalTokenCirculation: number;
}
