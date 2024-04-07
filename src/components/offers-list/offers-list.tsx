//import { useState } from 'react';
import { Offer } from '../../types/offer';
import OfferCard from '../card/card';

type OffersListProps = {
  offers: Offer[];
  listType: 'typical' | 'near';
};

function OffersList({offers, listType}: OffersListProps) {
  return (
    <div
      className={`${listType === 'typical' ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list'}`}
    >
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} cardType={listType}/>
      ))}
    </div>
  );
}

export default OffersList;
