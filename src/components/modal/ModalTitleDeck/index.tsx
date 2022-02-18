import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-multi-lang';
import { Formik, Form, Field } from "formik";
import { schema } from '@services/Validation/editDeck.schema';
import ValidationMessage from '@components/validation/ValidationMessage';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { RootState } from '@store/modules/rootReducer';

import IconSmall from '@components/icons/IconSmall';
import { openModalAction } from '@store/modules/card/actions';
import { editAction } from '@store/modules/deck/actions';

import { Block, Fields, Wrapper, Content, Title, Header, FieldName } from './styles';

export default function ModalTitleDeck() {
  const dispatch = useDispatch();
  const deck = useSelector((state:RootState) => state.personal.deck);
  const modal = useSelector((state:RootState) => state.card.modal);
  const t = useTranslation();
  const show = (modal === "edit-title")

  function handleSubmit(data) {
    dispatch(editAction(data))
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
        <Title>{t('editDeck.title')}</Title>
        <Formik 
              enableReinitialize
              initialValues={deck}
              onSubmit={handleSubmit}
              validationSchema={schema}>
          <Form>
            <Block>
              <Fields>
                <FieldName>{t('editDeck.name')}</FieldName>
                <Field name={"name"} type="text" className="input" placeholder={t('editDeck.namePlaceholder')} />
                <ValidationMessage name="name"/>
              </Fields>
              <Fields>
                <FieldName>{t('editDeck.description')}</FieldName>
                <Field name={"description"} as="textarea" className="input" placeholder={t('editDeck.namePlaceholder')} />
                <ValidationMessage name="description"/>
              </Fields>
              <ButtonPrimary type="submit" content={t('actions.save')}/>
            </Block>
          </Form>
        </Formik>        
      </Content>
    </Wrapper>
  );
}