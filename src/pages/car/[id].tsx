import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const CarPage: NextPage = (props: Props) => {
  const {asPath} = useRouter();
  console.log(asPath.substring(asPath.lastIndexOf('/')+1))
 // console.log(route);
  return <div>CarPage #</div>;
};

export default CarPage;
