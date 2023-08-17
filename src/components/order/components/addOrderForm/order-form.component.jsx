import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  FormStyled,
  ModalInput,
  ModalTextarea,
  ModalWrapper,
  Label,
  Button,
  ChecboxLabel,
  Title,
} from "./order-form.styled";
import { FormCustomChecbox } from "../../../components/checkbox/form-checkbox.component";

export const OrderFormComponent = ({ onSubmit, card, text }) => {
  const handeleSubmit = (values) => {
    if (card) {
      onSubmit(card._id, { ...values });
    } else {
      onSubmit(values);
    }
  };
  let formValues = {
    order: "",
    description: "",
    done: false,
    client_name: "",
    client_email: "",
    client_phone: "",
    date: "",
    sum: 0,
  };

  if (card) {
    formValues = {
      order: card.order,
      description: card.description,
      done: card.done,
      client_name: card.client_name,
      client_email: card.client_email,
      client_phone: card.client_phone,
      date: card.date,
      sum: card.sum,
    };
  }

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: handeleSubmit,
  });
  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <Title>{text}</Title>
      <Label htmlFor="title">
        Order
        <ModalInput
          type="text"
          name="order"
          id="order"
          required
          onChange={formik.handleChange}
          value={formik.values.order}
        />
      </Label>
      <Label htmlFor="client_name">
        Client Name
        <ModalInput
          type="text"
          name="client_name"
          id="client_name"
          required
          onChange={formik.handleChange}
          value={formik.values.client_name}
        />
      </Label>
      <Label htmlFor="client_email">
        Client Email
        <ModalInput
          type="text"
          name="client_email"
          id="client_email"
          required
          onChange={formik.handleChange}
          value={formik.values.client_email}
        />
      </Label>
      <Label htmlFor="client_phone">
        Client Phone
        <ModalInput
          type="text"
          name="client_phone"
          id="client_phone"
          required
          onChange={formik.handleChange}
          value={formik.values.client_phone}
        />
      </Label>
      <Label htmlFor="date">
        Date
        <ModalInput
          type="text"
          name="date"
          id="date"
          required
          onChange={formik.handleChange}
          value={formik.values.date}
        />
      </Label>
      <Label htmlFor="sum">
        Sum
        <ModalInput
          type="text"
          name="sum"
          id="sum"
          required
          onChange={formik.handleChange}
          value={formik.values.sum}
        />
      </Label>
      <ModalWrapper />
      <Label htmlFor="description">Description</Label>
      <ModalWrapper>
        <ModalTextarea
          as="textarea"
          required
          name="description"
          id="description"
          placeholder="Type desctiption"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </ModalWrapper>
      <ChecboxLabel>
        Done
        <FormCustomChecbox
          name="done"
          onChange={formik.handleChange}
          value={formik.values.done}
        />
      </ChecboxLabel>

      <Button type="submit">Send</Button>
    </FormStyled>
  );
};
