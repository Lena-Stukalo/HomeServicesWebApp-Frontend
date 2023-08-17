
import React from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { InView } from 'react-intersection-observer';
import { OrderCard } from '../orderCard/order-card.component';
import { StyledNavLink } from './orderSlider.styled';
import { Button } from '../../../components/button/button.component';
import { APP_KEYS } from '../../../../constants/const';

export const OrderSliderComponent = ({ cards, onDelete, count, onLoadMore, pagin }) => {

  const handleLoadNext = () => {
    onLoadMore((prev) => {
      const news = { ...prev, page: prev.page + 1 };
      return news;
});

  };
  const countitems = cards.length === count;
  const autoLoad = (inView) => {
    if (inView && !countitems) {
      handleLoadNext();
    }
  };
  return <Splide>
    {cards.map((order) => <SplideSlide key={order._id}>
      <StyledNavLink to={`/todo/${order._id}`}>
        <OrderCard card={order} />
      </StyledNavLink>
      <Button onClick={() => { onDelete(order._id); }} text="Delete" type="button" />
    </SplideSlide>
        )}
    <SplideSlide>
      <InView onChange={(inView) => { autoLoad(inView); }}>
        <Button onClick={handleLoadNext} disabled={countitems} text={!countitems ? 'Load more' : 'No more'} type="button" />
      </InView>
    </SplideSlide>
  </Splide>;
};
