import styles from './Button.module.css'

function Button(){
    const style = {
        backgroundColor: "hsl(175, 65.80%, 52.90%)",
        color: "hsl(0, 0%, 100%)",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    // Styling using Button.module.css (Button 1) and using inline styling ( Button 2)
    
    
    return(
    <>
  
    <button className={styles.button}>Button 1</button>

    <button style={style}>Button 2</button>

    </>
)
}

export default Button