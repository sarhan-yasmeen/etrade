import { Snackbar, Alert, AlertColor } from '@mui/material'


type CustomSnackBarProps = {
    open: boolean, severity: AlertColor | undefined, message: string | undefined
}

function CustomSnackBar({ open, severity, message }: CustomSnackBarProps) {
    return (
        <Snackbar open={open} autoHideDuration={6000}  >
            <Alert severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar >)
}

export default CustomSnackBar