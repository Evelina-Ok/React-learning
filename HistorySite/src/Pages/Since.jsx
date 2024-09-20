import { Header } from "../Components/Header/Header";
import { PageTitle } from "../Components/PageTitle/PageTitle";

export function Since () {
    return (
        <>
        <Header          
        header='SINCE: 1947'
        withinput={true}
        paragraph='What happened on this day - Here you can enter a specific year to get only events for that year'
        />
        <PageTitle title="Since" />
       
        </>
    )
}