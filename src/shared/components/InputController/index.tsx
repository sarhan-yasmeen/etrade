import { TextField, TextFieldProps } from "@mui/material";
import { Controller } from "react-hook-form";
import { InputController as InputControllerType } from "shared/types/InputConroller";

function InputController({
    control,
    label,
    name,
    ...textFieldProps
}: InputControllerType & TextFieldProps) {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={''}
            render={({ field: { onChange, value } }) => (
                <TextField
                    InputLabelProps={{
                        shrink: true,
                        sx: { padding: "3px" },
                    }}
                    onChange={onChange}
                    value={value}
                    label={label}
                    {...textFieldProps}
                />
            )}
        />
    );
}

export default InputController;
