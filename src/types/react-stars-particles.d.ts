// src/react-stars-particles.d.ts
declare module "react-stars-particles" {
  export interface GalaxyProps {
    color: string;
    quantity: number;
  }

  export const Galaxy: React.FC<GalaxyProps>;
}
