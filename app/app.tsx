"use client"

import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#e5e7eb', // Your primary color
        },
        secondary: {
            main: '#f50057', // Your secondary color
        },
        text: {
            primary: 'rgba(255,255,255,1)',
            secondary: 'rgba(255,255,255,1)',
        },
    },
    typography: {
        "fontFamily": `hack-regular, sans-serif !important`,
        h1: {
            fontFamily: 'jakarta-bold, sans-serif',
        },
        h2: {
            fontFamily: 'jakarta-bold, sans-serif',
        },
        h3: {
            fontFamily: 'jakarta-bold, sans-serif',
        },
        h4: {
            fontFamily: 'jakarta-bold, sans-serif',
        },
        h5: {
            fontFamily: 'jakarta-bold, sans-serif',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: '8px',
                    borderImageSlice: `1 !important`
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    background: "rgba(255, 255, 255, 0.13)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: "#9D9D9D !important"
                }
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginLeft: "0"
                }
            }
        }
    },
});
theme = responsiveFontSizes(theme)


const App = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <ThemeProvider theme={theme}>
            {/* <AppbarHeader/> */}
            {children}
        </ThemeProvider>
    )
}

export default App;