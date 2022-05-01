import { Slider } from "@mui/material";
export const CustomSlicer = () => {
  return (
    <Slider
      defaultValue={90}
      // tailwind 里的className
      // className="text-neutral-700"
      componentsProps={{
        thumb: { className: "rounded-sm hover:bg-purple-700" },
      }}
    />
  );
};
