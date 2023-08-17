import React from "react";
import { OrderList } from "../orderList/order-list.component";
import { OrderSliderComponent } from "../orderSlider/orderSlider.component";
import { OrderTabele } from "../orderTable/order-table.component";

export const TodoContent = ({
  data,
  onDelete,
  onView,
  onLoadMore,
  pagin,
  count,
  datatable,
}) => {
  const screenSize = {
    width: window.innerWidth,
    isMobile: window.innerWidth <= 480,
    isTablet: window.innerWidth > 480 && window.innerWidth < 1280,
    isDescktop: window.innerWidth >= 1280,
  };
  return (
    <>
      {screenSize.isMobile && (
        <OrderList
          cards={data}
          onDelete={onDelete}
          onLoadMore={onLoadMore}
          pagin={pagin}
          count={count}
        />
      )}
      {screenSize.isTablet && (
        <OrderSliderComponent
          cards={data}
          onDelete={onDelete}
          onLoadMore={onLoadMore}
          pagin={pagin}
          count={count}
        />
      )}
      {screenSize.isDescktop && (
        <OrderTabele
          cards={datatable}
          onDelete={onDelete}
          onView={onView}
          onLoadMore={onLoadMore}
          pagin={pagin}
          count={count}
        />
      )}
    </>
  );
};
