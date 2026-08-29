import type { ComponentType } from 'react';

export interface PayFeature {
  icon: ComponentType<{ height: number; width: number }>;
  title: string;
  description: string;
}

export interface PayPlan {
  id: number;
  title: string;
  description: string;
  discount?: number;
}
