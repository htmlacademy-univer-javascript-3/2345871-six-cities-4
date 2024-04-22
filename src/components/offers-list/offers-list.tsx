//import { useState } from 'react';
import { Offer } from '../../types/offer';
import OfferCard from '../card/card';

type OffersListProps = {
  offers: Offer[];
  listType: 'typical' | 'near';
};

function OffersList({ offers, listType }: OffersListProps) {
  const baseClass = 'places__list';
  const additionalClass = listType === 'typical' ? 'cities__places-list tabs__content' : 'near-places__list';

  return (
    <div className={`${additionalClass} ${baseClass}`}>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} cardType={listType} />
      ))}
    </div>
  );
}

export default OffersList;
