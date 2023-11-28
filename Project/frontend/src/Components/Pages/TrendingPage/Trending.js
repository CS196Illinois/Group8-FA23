import React from 'react';
import StockSection from '../../tre';
import { trendingObjOne, trendingObjTwo } from './stockdata';

function Stocks() {
  return (
    <>
      <StockSection {...trendingObjOne} />
    </>
  );
}

export default Stocks;