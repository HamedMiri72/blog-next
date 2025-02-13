import { ThemeProvider } from "next-themes";



export default function Provider({children}){
    return (
        <ThemeProvider defaultTheme="system" enableSystem attribute='class'>
            
                {children}
        
        </ThemeProvider>
    )
}