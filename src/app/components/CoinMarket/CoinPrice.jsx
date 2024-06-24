import React from 'react'

import { getIcon } from './icons'

const CoinPrice = ({ coinInfo }) => {
  const isNegative = typeof coinInfo.priceChange === 'number'
    ? coinInfo.priceChange < 0
    : coinInfo.priceChange.charAt(0) === '-'

  return (
    <div className="coin-price flex items-center gap-3">
      <div className="coin-price__icon flex-shrink-0">
        {getIcon(coinInfo.coin)}
      </div>

      <div className="coin-price__inner">
        <h5 className="flex gap-2 text-sm leading-1.5">
          <span className="text-neutral3">{coinInfo.coin}</span>

          <span className={`${isNegative ? 'text-[#F30A34]' : 'text-[#00D085]'}`}>
            {coinInfo.priceChange}
          </span>
        </h5>

        <p className="text-lg font-semibold leading-1.5 text-neutral1">
          {coinInfo.price}
        </p>
      </div>
    </div>
  )
}

export default CoinPrice
