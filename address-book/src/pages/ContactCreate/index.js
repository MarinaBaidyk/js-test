import React from 'react';
import { connect } from 'react-redux';
import InputAdornment from '@material-ui/core/InputAdornment';
import {TextField, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
//import { useState } from "react";
import { useHistory } from "react-router-dom";
//import * as fieldActions from "../../store/fieldList/actions";
import './index.css';


function ContactCreate({ fields, formData, onChangeField, formDataClear, onAddContact }) {

  const saveHandler = () => {
    const contactData = fields.reduce((acc, field) => {
      acc[field.name] = formData[field.name];
      return acc;
    }, {});

    onAddContact(contactData);
    formDataClear();
  };

  let history = useHistory();

  const onSaveHandler = () => {
    history.push("/contacts");
  };

  return (
    <>
      <div className="add-contact-item">
        <h2>Contact creating:</h2>
        {fields.map(field => (
          <div className="form-group">
            <span>{field.displayName}:</span>
            <TextField
              value={formData[field.name] || ''}
              onChange={e => onChangeField(field.name, e.target.value)}
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        ))}
        <Button variant="contained" color="primary" className="btn btn-primary" onClick={saveHandler}>
          Add
        </Button> 
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  fields: state.fieldList,
  formData: state.formData || {},
});

const mapDispatchToProps = dispatch => ({
   onChangeField: (name, value) => dispatch({
     type: 'FIELD_CHANGE',
     payload: {name, value}
   }),
   onAddContact: contactData => dispatch({
      type: 'CONTACT_CREATE',
      payload: contactData,
   }),
   formDataClear: () => dispatch({type: 'FIELD_CLEAR'}),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactCreate);
