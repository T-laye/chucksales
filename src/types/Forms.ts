export interface AuthFormValues {
  fullName?: string;
  email?: string;
  password?: string;
  cPassword?: string;
  oldPassword?: string;
  otp?: string;
  file?: any;
}
export interface ContributeFormValues {
  // contributeTo: `0x${string}`;
  amount: string;
  email: string;
}
export interface ProjectFormValues {
  name: string;
  description: string;
  file?: any;
  email: string;
  date: string;
  wallet: string;
  twitter: string;
  discord: string;
  telegram: string;
  website: string;
  network: string;
  goLive?: boolean;
  percentageCirculation: number;
  totalTokenCirculation: number;
  extension: string;
}
