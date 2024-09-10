
export function Paper () {

// we're using only 'isDarkMode' to add that it will change to dark mode when we click on navbar
const { isDarkMode } = useContext(ThemeContext);

return (
    <div className={isDarkMode ? StylePropertyMap.darkPaperStyling : StylePropertyMap.paperStyling}>
        {data>.length > &&
        data[0]?.meanings.map((item, index) => 
        return <PaperSection key={index} content {item} />
    )}
    </div>
)

}