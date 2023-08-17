import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { OrderInfoComponent } from "../../OrderInfo/order-info.component";
import { OrdersContainer } from "./index.styled";
import { Notification } from "../../../components/notification/notification.component";
import { ModalComponent } from "../../../components/modal/modal.component";
import { OrderFormComponent } from "../../components/addOrderForm/order-form.component";
import {
  useDeleteMutation,
  useGetByIdQuery,
  useUpdateMutation,
} from "../../../../redux/order";

const OrderIdPageContainer = () => {
  const { id } = useParams();
  const { isLoading, data, isError } = useGetByIdQuery(id);
  const [deleteOrder] = useDeleteMutation();
  const [update] = useUpdateMutation();
  const [isOpen, setIsOpen] = useState(false);

  const onDelete = (id) => {
    deleteOrder(id);
  };
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onSubmit = (id, order) => {
    const { _id, ...data } = order;
    update({ orderId: id, data });
  };
  if (isLoading) {
    return <Notification text="...Loading" />;
  }
  if (isError) {
    return <Notification text="!!!Error" />;
  }
  if (data) {
    return (
      <OrdersContainer>
        <OrderInfoComponent
          card={data}
          onClick={toggleModal}
          onDelete={onDelete}
        />
        {isOpen && (
          <ModalComponent onClick={toggleModal}>
            <OrderFormComponent
              card={data}
              onSubmit={onSubmit}
              text="Update your todo"
            />
          </ModalComponent>
        )}
      </OrdersContainer>
    );
  }
};

export default OrderIdPageContainer;
