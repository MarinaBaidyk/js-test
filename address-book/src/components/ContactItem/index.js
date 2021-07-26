import { IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';


export default function ContactItem({ title, onDelete, onShow }) {
  return (
    <div className="contact-item">
      <span className="contact-display-info" onClick={onShow}>
        {title}
      </span>

      <div className="contact-controls">
        <IconButton color="primary" component="span">
          <CreateIcon />
        </IconButton>

        <IconButton onClick={onDelete} color="secondary" component="span">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}
