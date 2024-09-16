interface Props {
  title: string;
  subtitle?: string;
  titleClassName: string;
  subtitleClassName?: string;
  className?: string;
  dir?: string;
}

const Column = ({ dir, className, title, subtitle, titleClassName, subtitleClassName }: Props) => {
  return (
    <div className={className} dir={dir}>
      <p className={titleClassName}>{title}</p>
      <p className={subtitleClassName}>{subtitle}</p>
    </div>
  );
};

export default Column;
