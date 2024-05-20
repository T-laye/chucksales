export interface AuthFormValues {
  fullName?: string;
  email: string;
  password: string;
  cPassword?: string;
}
export interface ContributeFormValues {
  contributeTo: `0x${string}` ;
  amount: string;
  coin: string;
}
export interface ProjectFormValues {
  name?: string;
  description?: string;
  logo?: string;
  email?: string;
  wallet?: string;
  twitter?: string;
  discord?: string;
  telegram?: string;
  website?: string;
}
