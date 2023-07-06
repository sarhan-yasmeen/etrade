import { Box, InputLabel, TextField, TextFieldProps } from "@mui/material";
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
            render={({ field: { ref, onChange, value }, fieldState: { error } }) => {
                return (
                    <Box height={'50%'}>

                        <TextField
                            inputRef={ref}
                            error={Boolean(error)}
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={onChange}
                            value={value}
                            label={label}
                            {...textFieldProps}
                        />
                        {error ? <InputLabel sx={{ color: '#E95757', fontSize: 'small' }} >{error.message}</InputLabel> : ''
                        }
                    </Box >
                )
            }}
        />
    );
}

export default InputController;
