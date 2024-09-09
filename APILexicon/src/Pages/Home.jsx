import { PageTitle } from "../Components/PageTitle/PageTitle"

import { Searchbar } from "../Components/Searchbar/Searchbar"

export function Home () {
    return (
        <>
        
        <div>
        <PageTitle title="Home" />
        <Searchbar
        title="Enter a word to search for"
        action={() => SearchWord()}
        input={(e) => setSearchedWord(e.target.value)}>
            
        </Searchbar>
        
        </div>
  
        </>
    )
        
}