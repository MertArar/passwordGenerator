import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-2 mt-auto font-text">
      <p className="text-lg">
        Developed by <span className="font-bold">Mert Arar</span>
      </p>
      <div className="flex justify-center gap-2 text-4xl">
        <a href="https://github.com/MertArar">
          <Icon icon="mdi:github" />
        </a>
        <a href="https://www.linkedin.com/in/mert-arar-6788771bb/">
          <Icon icon="mdi:linkedin" />{" "}
        </a>
        <a href="https://medium.com/@mertarar.ma">
          <Icon icon="mdi:medium" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
