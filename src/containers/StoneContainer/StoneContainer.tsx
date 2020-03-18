import React, { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';
import { getStones } from '../../requests';
import StoneGrid from '../../components/ui/stonegrid/StoneGrid';
interface stones {
  startDate: Date;
  name: string;
  _id: string;
  author: {
    role: string;
    _id?: string;
    name: string;
    email: string;
    __v?: number;
  };
  contact: string;
  description: string;
  but: number;
  currentValue: number;
  imageCover: {
    secure_url: string;
    public_id: string;
  };
  images: [
    {
      _id?: string;
      secure_url: string;
      public_id: string;
    }
  ];
  slug: string;
  id: string;
}

export const StoneContainer = () => {
  const [data, setData] = useState<stones[]>([]);
  const { ...calls } = useApi({ getStones });
  console.log(calls.getStones.data.data?.stones);

  useEffect(() => {
    calls.getStones.call();
  }, []);
  useEffect(() => {
    if (calls.getStones.data.data?.stones) setData(calls.getStones.data.data?.stones);
  }, [calls.getStones.success]);

  return <div>{data ? <StoneGrid data={data} /> : <h1>No stones yet</h1>}</div>;
};
