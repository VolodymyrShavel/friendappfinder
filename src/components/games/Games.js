// import jsonfile from './games.json';
import {Outlet, Link} from 'react-router-dom';
import classes from './Games.module.css';
import React from 'react';
import Nav from './Nav';
import MainName from './MainName';
import Header from '../Header';
import Modal from './Modal';
import Backdrop from './Backdrop';
import {useState} from 'react';
import MainBody from './MainBody';
// import {getGames} from '../../breastplate/Buttons/games';

function Games(props) {
   // const findGame = getGames();
   //  console.log(jsonfile);
   const [showModal, setShowModal] = useState(false);
   function openModal() {
      setShowModal(true);
   }
   function closeModal() {
      setShowModal(false);
   }

   var path = window.location.pathname;
   var page = path.split('/').pop();
   console.log(page);

   return (
      <>
         <Header />
         <div className={classes.main_place}>
            <main className={classes.main_section}>
               <Nav />
               <div className={classes.main_body_name}>
                  <MainName name={page} />
               </div>
               <div className={classes.main_body_button}>
                  <button className={classes.leaveModel} onClick={openModal}>
                     ОСТАВИТЬ ЗАЯВКУ
                  </button>
               </div>
               <MainBody />

               <div></div>
            </main>
            <Outlet />
            {showModal && <Modal />}
            {showModal && <Backdrop onCancel={closeModal} />}
         </div>
      </>
   );
}

export default Games;
