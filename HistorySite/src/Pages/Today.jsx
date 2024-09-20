import { useState } from "react";
import { Header } from "../Components/Header/Header";
import { Navbar } from "../Components/Navbar/Navbar";
import { PageTitle } from "../Components/PageTitle/PageTitle";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Timeline } from "../Components/Timeline/Timeline";

export function Today() {
  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0");
 
  const [visibleCount, setVisibleCount] = useState(10)


  // TanStack query makes fetching, caching, synchronizing and updating server state in your web applications
  let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}`;

  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["historyToday", day, month],
    queryFn: () => fetch(url).then((res) => res.json()),
    staleTime: 1000 * 600,
  });
  console.log("Test Data:", data);

  if (isPending) {
    return <div>Loading......</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  const events = data && data.events ? data.events : [];
  console.log(events);

  const sortedEvents = events.sort((a, b) => a.year - b.year)

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 10)
  }

  return (
    <>
      <Header
        header="ON THIS DAY"
        withinput={false}
        paragraph="What happened on this day - historical events, deaths and births throughout time"
      />
      <PageTitle title="Today" />
      
      <Navbar />

      {/* {events.map((event) => { */}
      {sortedEvents.slice(0, visibleCount).map((event, index) => {
        return <Timeline year={event.year} extract={event.pages[0].extract} key={index}/>;
      })}

  
    </>
  );
}
