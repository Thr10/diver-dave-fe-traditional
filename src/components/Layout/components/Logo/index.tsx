import LogoIcon from '../../../../assets/images/dave_logo_2.png';

export default function Logo() {
  return (
    <div className="absolute left-0 flex-shrink-0 lg:static">
      <a href="#">
        <span className="sr-only">Your Company</span>
        <img className="h-9 w-auto" src={LogoIcon} alt="Your Company" />
      </a>
    </div>
  );
}
