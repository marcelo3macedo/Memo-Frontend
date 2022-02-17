import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-multi-lang';
import { Formik, Form, Field } from "formik";
import { schema } from '@services/Validation/editCard.schema';
import ValidationMessage from '@components/validation/ValidationMessage';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { RootState } from '@store/modules/rootReducer';

import { Block, Fields, Wrapper, Content, Title, Header } from './styles';
import IconSmall from '@components/icons/IconSmall';
import { confirmEditAction, openModalAction } from '@store/modules/card/actions';

export default function ModalEditDeck() {
  const dispatch = useDispatch();
  const card = useSelector((state:RootState) => state.card.card);
  const modal = useSelector((state:RootState) => state.card.modal);
  const t = useTranslation();
  const show = (modal === "edit-card")

  function handleSubmit(data) {
    dispatch(confirmEditAction(data));
  }
  
  function closeAction() {
    dispatch(openModalAction(null))
  }

  return (
    <Wrapper show={show}>
      <Content>
        <Header onClick={closeAction}>
          <IconSmall name="delete"/>
        </Header>
        <Title>{t('editCard.card')}</Title>
        <Formik 
              enableReinitialize
              initialValues={card}
              onSubmit={handleSubmit}
              validationSchema={schema}>
          <Form>
            <Block>
              <Fields>
                <Field name={"title"} type="text" className="input" placeholder={t('newCard.header')} />
                <ValidationMessage name="title"/>
                <Field name={"content"} as="textarea" type="text" className="input" placeholder={t('newCard.content')} />
                <ValidationMessage name="content"/>
                <Field name={"secretContent"} as="textarea" type="text" className="input" placeholder={t('newCard.secretContent')} />
                <ValidationMessage name="secretContent"/>   
              </Fields>
              <ButtonPrimary type="submit" content={t('actions.save')}/>
            </Block>
          </Form>
        </Formik>        
      </Content>
    </Wrapper>
  );
}