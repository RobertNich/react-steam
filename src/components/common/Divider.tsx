interface Props {
  orientation?: "horizontal" | "vertical";
  type?: "dashed" | "dotted" | "solid" | "rounded";
}

export const Divider = ({
  orientation = "horizontal",
  type = "solid",
}: Props) => {
  const styleName = `divider-${orientation} divider-${type}`;

  return <div className={styleName} />;
};
