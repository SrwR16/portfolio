import { useState, useEffect } from 'react';
import { OSType } from '../types/os';

export const useOS = () => {
  const [osType, setOsType] = useState<OSType>('linux');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent.toLowerCase();

      if (/(android)/i.test(userAgent)) {
        setOsType('android');
      } else if (/(iphone|ipad|ipod|macintosh|mac os x)/i.test(userAgent)) {
        setOsType('apple');
      } else if (/(windows)/i.test(userAgent)) {
        setOsType('windows');
      } else {
        setOsType('linux');
      }
    }
  }, []);

  return { osType };
};