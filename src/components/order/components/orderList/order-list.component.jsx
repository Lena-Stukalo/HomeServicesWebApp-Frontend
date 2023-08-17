import React from 'react';
import { InView } from 'react-intersection-observer';
import { List, Wraper, StyledNavLink, ButtonReload } from './order-list.styled';
import { OrderCard } from '../orderCard/order-card.component';
import { Button } from '../../../components/button/button.component';
import { APP_KEYS } from '../../../../constants/const';


export const OrderList = ({ cards, onDelete, onLoadMore, pagin, count }) => {


  const handleLoadNext = () => {
    onLoadMore((prev:typeof pagin) => {
      const news = { ...prev, page: prev.page + 1 };
      return news;
});
  };
  const countitems = cards.length === count;
  const autoLoad = (inView:boolean) => {
    if (inView && !countitems) {
      handleLoadNext();
    }
  };
  return <List>
    {cards.map((order) => (<Wraper key={order._id}>
      <StyledNavLink to={`/todo/${order._id}`}>
        <OrderCard card={order} />
      </StyledNavLink>
      <Button onClick={() => { onDelete(order._id); }} text="Delete" type="button" />
    </Wraper>))}
    <InView onChange={(inView) => { autoLoad(inView); }}>
      <ButtonReload onClick={handleLoadNext} disabled={countitems}>{!countitems ? 'Load more' : 'No more'}</ButtonReload>
    </InView>

  </List>;
};
