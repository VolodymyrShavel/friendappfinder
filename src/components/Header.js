import icon from './gg1.png';

function Header() {
   return (
      <div className="header_body">
         <img src={icon} className="icon_logo" alt="" />
         <h1>Найди себе партнёра</h1>
      </div>
   );
}

export default Header;
