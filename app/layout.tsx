import './globals.css'
import MainHeader from '@/components/main-header/main.header';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

// wrapper for all pages(page.tsx)
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}



/*      Not needed here(layout of meals folder)

import React, { ReactNode } from 'react';

// Interface to define the type of props
interface MealsLayoutProps {
    children: ReactNode;
}

// MealsLayout component is typed as 'React.FC' with the type of props 'MealsLayoutProps' to specify that it receives 'children' as a prop
const MealsLayout: React.FC<MealsLayoutProps> = ({ children }) => {
    return (
        <>
            <p>Meals Layout</p>
            {children}
        </>
    );
}

export default MealsLayout; */