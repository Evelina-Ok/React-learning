import { Header } from "../Components/Header/Header";
import { Navbar } from "../Components/Navbar/Navbar";
import { PageTitle } from "../Components/PageTitle/PageTitle";
import { useQuery, useQueryClient } from '@tanstack/react-query';


export function ByDate () {

        // TanStack query makes fetching, caching, synchronizing and updating server state in your web applications
let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/08/09`;

const queryClient = useQueryClient()

const {isPending, error, data} = useQuery({
  queryKey: ['historyByDate'],
  queryFn: () => fetch(url).then(res => res.json()),
  staleTime: 1000 * 600,
})
console.log("Test Data:", data);

if (isPending) {
  return (<div>Loading......</div>)
}
if (error) {
  return (<div>Error</div>)
}


    return (
        <>
        <Header 
        header='ON: '
        // adding prop 'withinput' in order to better control where input is used or not
        withinput={true}
        paragraph='What happened on this day - Here you can enter a specific date to get only events that happened on this date'
        />
        <PageTitle title="By Date" />   

          <Navbar />     
        </>
    );
}

// 22/08