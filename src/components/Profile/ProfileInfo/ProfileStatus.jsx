import React, { useEffect, useState } from "react";
import s from './ProfileInfo.module.css'


const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])


   const activateEditMode = () => {
      setEditMode(true);
   }

   const deActivateEditMode = () => {
      setEditMode(false);
      props.updateStatus(status);
   }

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
   }

   return (
      <>
         {!editMode &&
            <div>
               <span className={s.profileStatus} onDoubleClick={activateEditMode}>
                  {props.status}
               </span>
            </div>
         }

         {editMode &&
            <div className={s.profileStatusInput}>
               <input
                  autoFocus={true}
                  onBlur={deActivateEditMode}
                  onChange={onStatusChange}
                  value={status}
               />
            </div>
         }
      </>
   );
}


export default ProfileStatusWithHooks;

