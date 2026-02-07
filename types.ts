import React from 'react';

export interface Organ {
  id: string;
  name: string;
  description: string;
  pathId: string; // ID of the SVG path element
}

export interface NodeContent {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  connection: string;
  icon: React.ElementType;
}

export interface NavItem {
  label: string;
  href: string;
}