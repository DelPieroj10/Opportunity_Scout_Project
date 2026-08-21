import Page from "@/App/Dashboard/page";
import { OpportunitySearchProvider } from "@/context/OpportunitySearchContext";

function ScoutApp() {
  return (
    <>
      <OpportunitySearchProvider>
        <Page />
      </OpportunitySearchProvider>
    </>
  );
}

export default ScoutApp;
