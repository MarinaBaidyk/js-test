import React from 'react';
import { connect } from 'react-redux';
import { Button, Dialog, DialogActions, DialogTitle, List, ListItem, ListItemText } from '@material-ui/core';
import ContactItem from '../../components/ContactItem';
import {Link} from 'react-router-dom';
import * as contactActions from "../../store/contactList/actions";
import './index.css';

function ContactList({ list, fields, onDelete, onCreate, showContactData }) {
  const [open, setOpen] = React.useState(false);
  
  //const [deleteItem, setDeleteItem] = React.useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

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
        {titles.map((title) => (
          <ContactItem key={title} title={title} onSave={(title) => onCreate(title)} onDelete={handleOpen} onShow={handleOpen} />
        ))}
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Вы уверены что хотите удалить контакт?</DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Нет
          </Button>
          <Button onClick={handleClose} color="secondary">
            Да
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <List>
          {titles.map((title) => (
            <ListItem key={title}>
              <ListItemText primary={title} />
            </ListItem>
          ))}
      </List>
    </Dialog>
    </>
  );
}

const mapStateToProps = state => ({
  list: state.contactList,
  fields: state.fieldList,
});

const mapDispatchToProps = (dispatch) => ({
  onCreate: (title) => dispatch(contactActions.contactCreate(title)),
  onDelete: (index) => dispatch(contactActions.contactDelete(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
