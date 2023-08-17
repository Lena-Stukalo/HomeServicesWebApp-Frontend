import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link, LinkWraper, OrdersContainer } from "./index.styled";
import { Notification } from "../../../components/notification/notification.component";
import { Button } from "../../../components/button/button.component";
import { ModalComponent } from "../../../components/modal/modal.component";
import { OrderFormComponent } from "../../components/addOrderForm/order-form.component";
import Loader from "../../../components/loader/loader.component";
import { TodoContent } from "../../components/OrderContent/order-content.component";
import {
  useCreateMutation,
  useDeleteMutation,
  useGetAllQuery,
} from "../../../../redux/order";

const OrdersPageContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 3,
  });
  const [orders, setOrders] = useState({ result: [], count: 0 });
  const { data, isLoading, isError } = useGetAllQuery(pagination);
  const [deleteOrd] = useDeleteMutation();
  const [create] = useCreateMutation();

  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      setOrders((prev) => ({
        result: [...prev.result, ...data.result],
        count: data.total,
      }));
    }
  }, [data]);
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const onSubmit = (order) => {
    create(order)
  };
  const onDelete = (id) => {
    deleteOrd(id)
  };
  const handleView = (id) => {
    navigate(`/order/${id}`);
  };
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Notification text="!!!Error" />;
  }
  if (orders) {
    return (
      <OrdersContainer>
        {!data.result.length ? (
          <Notification text="You dont have any todo" />
        ) : (
          <TodoContent
            data={orders.result}
            datatable={data.result}
            onDelete={onDelete}
            onView={handleView}
            onLoadMore={setPagination}
            pagin={pagination}
            count={data.total}
          />
        )}
        <LinkWraper>
          <Button text="Add todo" onClick={toggleModal} type="button" />
          <Link to="/profile">Profile</Link>
        </LinkWraper>
        {isOpen && (
          <ModalComponent onClick={toggleModal}>
            <OrderFormComponent onSubmit={onSubmit} text="Add your todo" />
          </ModalComponent>
        )}
      </OrdersContainer>
    );
  }
};

export default OrdersPageContainer;
