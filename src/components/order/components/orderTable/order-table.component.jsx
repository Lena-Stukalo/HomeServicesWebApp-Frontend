import React from "react";
import {
  ButtonWraper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "./order-table.styled";
import { TodoAction } from "./orderAction/order-action.component";
import { Button } from "../../../components/button/button.component";
import { APP_KEYS } from "../../../../constants/const";

export const OrderTabele = ({
  cards,
  onDelete,
  onView,
  pagin,
  onLoadMore,
  count,
}) => {
  const handleLoadNext = () => {
    onLoadMore((prev) => {
      const news = { ...prev, page: prev.page + 1 };
      return news;
    });
  };
  const handleLoadPrev = () => {
    onLoadMore((prev) => {
      const news = { ...prev, page: prev.page - 1 };
      return news;
    });
  };
  const countitems = pagin.limit * (pagin.page + 1) < count;
  console.log();

  return (
    <TableContainer>
      {" "}
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cards.map((order) => (
            <TableRow key={order._id}>
              <TableCell>{order.order}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>
                <TodoAction
                  isTrue={order.done}
                  onDelete={onDelete}
                  id={order._id}
                  onView={onView}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ButtonWraper>
        {pagin.page !== 0 && (
          <Button text="Back" onClick={handleLoadPrev} type="button" />
        )}
        {countitems && (
          <Button text="Next" onClick={handleLoadNext} type="button" />
        )}
      </ButtonWraper>
    </TableContainer>
  );
};
