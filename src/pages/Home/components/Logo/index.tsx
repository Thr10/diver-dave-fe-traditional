export default function Logo() {
  return (
    <div className="absolute left-0 flex-shrink-0 lg:static">
      <a href="#">
        <span className="sr-only">Your Company</span>
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
          alt="Your Company"
        />
      </a>
    </div>
  );
}
