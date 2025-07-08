
import MainHeader from '../components/MainHeader/MainHeader';
import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Cravish',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <MainHeader/>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
