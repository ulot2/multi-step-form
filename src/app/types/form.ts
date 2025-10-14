export type PlanTypes = {
  name: string;
  monthly: number;
  yearly: number;
  img: string;
};

export type Addons = {
  name: string;
  description: string;
  monthly: number;
  yearly: number;
};

export type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  plan: PlanTypes;
  addOns: Addons[];
};
