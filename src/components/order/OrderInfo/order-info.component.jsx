import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Info,
  Title,
  Description,
  CheckBoxLabel,
  CardText,
  Button,
  ButtonWraper,
  Wraper,
} from "./order-info.styled";
import { CustomCheckbox } from "../../components/checkbox/checkbox.component";
import { APP_KEYS } from "../../../constants/const";

export const OrderInfoComponent = ({ card, onClick, onDelete }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    onDelete(card._id);
    navigate(APP_KEYS.ROUTER_KEYS.ORDERS);
  };
  const handleGoBack = () => {
    navigate(APP_KEYS.ROUTER_KEYS.ORDERS);
  };

  return (
    <Info>
      <Title>{card.order}</Title>
      <Wraper>
        <CardText>Description:</CardText>
        <Description>{card.description}</Description>
      </Wraper>
      <Wraper>
        <CardText>Client Name:</CardText>
        <Description>{card.client_name}</Description>
      </Wraper>
      <Wraper>
        <CardText>Client Email:</CardText>
        <Description>{card.client_email}</Description>
      </Wraper>
      <Wraper>
        <CardText>Client Phone:</CardText>
        <Description>{card.client_phone}</Description>
      </Wraper>
      <Wraper>
        <CardText>Must be done until:</CardText>
        <Description>{card.date}</Description>
      </Wraper>
      <Wraper>
        <CardText>Sum:</CardText>
        <Description>{card.sum}</Description>
      </Wraper>
      <CheckBoxLabel>
        Done:
        <CustomCheckbox isTrue={card.done} />
      </CheckBoxLabel>
      <ButtonWraper>
        <Button type="button" onClick={handleDelete}>
          Delete
        </Button>
        <Button
          type="button"
          onClick={() => {
            onClick();
          }}
        >
          Update
        </Button>
        <Button type="button" onClick={handleGoBack}>
          Go back
        </Button>
      </ButtonWraper>
    </Info>
  );
};
