import type { PayFeature, PayPlan } from './types';

import FasterIcon from '@/assets/icons/faster.svg';
import UnlimetedIcon from '@/assets/icons/unlimited.svg';

export const payFeatures: PayFeature[] = [
  {
    icon: UnlimetedIcon,
    title: 'Unlimited',
    description: 'Plant Identify',
  },
  {
    icon: FasterIcon,
    title: 'Faster',
    description: 'Process',
  },
  {
    icon: FasterIcon,
    title: 'Detailed',
    description: 'Plant care',
  },
];

export const payPlans: PayPlan[] = [
  {
    id: 1,
    title: '1 Month',
    description: '$2.99/month, auto renewable',
  },
  {
    id: 2,
    title: '1 Year',
    description: 'First 3 days free, then $529,99/year',
    discount: 50,
  },
];
