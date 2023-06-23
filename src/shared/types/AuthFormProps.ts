import { InputController } from "./InputConroller";
export type AuthFormProps = {
  inputsArr: InputController[];
  title: string;
  handleSubmitFunc: (data: any) => void;
  subTitle: string;
};
