import { TfiEmail, TfiGithub, TfiLinkedin } from "react-icons/tfi";

const items = [
  {
    icon: <TfiEmail />,
    link: "/#contact-me",
  },
  {
    icon: <TfiGithub />,
    link: "https://github.com/elsahv?tab=repositories",
  },
  {
    icon: <TfiLinkedin />,
    link: "https://linkedin.com ",
  },
];

const SmIcon = () => {
  return (

    <div className="pl-1 opacity-90 text-onyx flex justify-left">
    <div className="border-t border-b border-black flex items-center space-x-5 text-3xl px-2 py-1">


      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <a href={item.link}>{item.icon}</a>
        </div>
      ))}



    </div>
    </div>
  );
};

export default SmIcon;
