// // src/components/TaskEditForm.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { editTask } from '../actions/TaskActions';

// const TaskEditForm = ({ taskId, title, description, onClose }) => {
//   const [editedTitle, setEditedTitle] = useState(title);
//   const [editedDescription, setEditedDescription] = useState(description);

//   const dispatch = useDispatch();

//   const handleEdit = () => {
//     dispatch(editTask(taskId, { title: editedTitle, description: editedDescription }));
//     onClose();
//   };

//   return (
//     <div className="edit-form">
//       <input
//         type="text"
//         value={editedTitle}
//         onChange={(e) => setEditedTitle(e.target.value)}
//         placeholder="Edit Title"
//       />
//       <textarea
//         value={editedDescription}
//         onChange={(e) => setEditedDescription(e.target.value)}
//         placeholder="Edit Description"
//       />
//       <button onClick={handleEdit}>Save Changes</button>
//       <button onClick={onClose}>Cancel</button>
//     </div>
//   );
// };

// export default TaskEditForm;
