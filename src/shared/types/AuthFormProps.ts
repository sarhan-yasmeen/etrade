import { InputController } from "./InputConroller";
export type AuthFormProps = {
  inputsArr: InputController[];
  title: string;
  ButtonText: string;
  subText: string;
  label: string;
  handleSubmitFunc: (data: any) => void;
  subTitle: string;
};
