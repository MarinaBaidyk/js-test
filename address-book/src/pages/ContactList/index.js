import React from 'react';
import { useState } from "react";
import { connect } from 'react-redux';
import { Button, Dialog, DialogActions, DialogTitle, IconButton, DialogContent } from '@material-ui/core';
//import ContactItem from '../../components/ContactItem';
//import { IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
//import * as contactActions from "../../store/contactList/actions";
import './index.css';
//import { ControlPointDuplicateOutlined } from '@material-ui/icons';

function ContactList({ list, fields, removeContact }) {
  const history = useHistory();
  const [forRemoving, setForRemoving] = useState(null);
  const [showContact, setShowContact] = useState(null);

  const closeDialog = () => setForRemoving(null);
  const removeHandler = () => {
    removeContact(forRemoving);
    closeDialog();
  };

  const closeShowDialog = () => {setShowContact(null)}
  
  //const [deleteItem, setDeleteItem] = React.useState(null);

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const keys = fields
    .filter(field => field.display)
    .map(field => field.name);

  const titles = list
    .map(contact => keys.map(key => contact[key]).join(' '));

  return (
    <>
      <Link to="/contacts/add" className="link-add">
        <Button variant="contained" color="primary">
          Create New Contact
        </Button>
      </Link>

      <div className="contact-list-container">
        {titles.map((title, index, field) => (
          //<ContactItem key={title} title={title} onSave={(title) => onCreate(title)} onDelete={handleOpen} onShow={handleOpen} />
          <div className="contact-item"  key={index}>
            <span className="contact-display-info" onClick={() => setShowContact(title)}>
              {title}
            </span>
      
            <div className="contact-controls">
              <IconButton color="primary" component="span" onClick={() => history.push('/contacts/add')}>
                <CreateIcon />
              </IconButton>
      
              <IconButton color="secondary" component="span" onClick={() => setForRemoving(title)}>
                <DeleteIcon /> 
              </IconButton>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!forRemoving} onClose={closeDialog}>
        <DialogTitle>Вы уверены что хотите удалить контакт?</DialogTitle>

        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Нет
          </Button>
          <Button onClick={removeHandler} color="secondary">
            Да
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={!!showContact} onClose={closeShowDialog}>
        <DialogTitle>Данные контакта:</DialogTitle>
        <DialogContent>
          {fields.map(field => (
            <div>
              {field.displayName}: {showContact && showContact[field.name]}
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeShowDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const mapStateToProps = state => ({
  list: state.contactList,
  fields: state.fieldList,
});


const mapDispatchToProps = (dispatch) => ({
  // onCreate: (title) => dispatch(contactActions.contactCreate(title)),
  // onDelete: (index) => dispatch(contactActions.contactDelete(index))
  removeContact: value => dispatch({
    type: 'CONTACT_DELETE',
    payload: value,
 }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
