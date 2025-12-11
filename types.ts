import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan: number;
}

export interface RoadmapItem {
  version: string;
  title: string;
  date: string;
  features: string[];
  status: 'released' | 'processing' | 'planned' | 'classified';
}

export interface CoinStats {
  price: string;
  marketCap: string;
  holders: string;
  supply: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}