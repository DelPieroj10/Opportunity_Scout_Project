import Page from "@/App/Dashboard/page";
import { OpportunitySearchProvider } from "@/context/OpportunitySearchContext";

function ScoutApp() {
  return (
    <>
      <OpportunitySearchProvider>
        <Page />
        <h1 className="text-3xl font-bold">Welcome to my App!</h1>
      </OpportunitySearchProvider>
    </>
  );
}

export default ScoutApp;
