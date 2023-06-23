import { Control } from "react-hook-form";

export type InputController = {
  label: string;
  name: string;
  control: Control<any>;
};
