import { useAuth } from "react-oidc-context";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";
import { Input } from "@/components/ui/input";
import { AlertCircle, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { PublishedEventSummary, SpringBootPagination } from "@/domain/domain";
import { listPublishedEvents, searchPublishedEvents } from "@/lib/api";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import PublishedEventCard from "@/components/published-event-card";
import { SimplePagination } from "@/components/simple-pagination";

const AttendeeLandingPage: React.FC = () => {
  const { isAuthenticated, isLoading, signinRedirect, signoutRedirect } =
    useAuth();

  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [publishedEvents, setPublishedEvents] = useState<
    SpringBootPagination<PublishedEventSummary> | undefined
  >();
  const [error, setError] = useState<string | undefined>();
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  useEffect(() => {
    let cancelled = false;

    const loadPublishedEvents = async () => {
      try {
        setError(undefined);
        const events = submittedQuery
          ? await searchPublishedEvents(submittedQuery, page)
          : await listPublishedEvents(page);
        if (!cancelled) {
          setPublishedEvents(events);
        }
      } catch (err) {
        if (!cancelled) {
          if (err instanceof Error) {
            setError(err.message);
          } else if (typeof err === "string") {
            setError(err);
          } else {
            setError("An unknown error has occurred");
          }
        }
      }
    }

    void loadPublishedEvents();
    return () => {
      cancelled = true;
    };
  }, [page, submittedQuery]);

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Alert variant="destructive" className="bg-gray-900 border-red-700">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Nav */}
      <div className="flex justify-end p-4 container mx-auto">
        {isAuthenticated ? (
          <div className="flex gap-4">
            <Button
              onClick={() => navigate("/dashboard")}
              className="cursor-pointer"
            >
              Dashboard
            </Button>
            <Button
              className="cursor-pointer"
              onClick={() => signoutRedirect()}
            >
              Log out
            </Button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Button className="cursor-pointer" onClick={() => signinRedirect()}>
              Log in
            </Button>
          </div>
        )}
      </div>
      {/* Hero */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-[url(/organizers-landing-hero.png)] bg-cover min-h-[200px] rounded-lg bg-center md:min-h-[250px]">
          <div className="bg-black/45 min-h-[200px] md:min-h-[250px] p-6 sm:p-10 md:p-16">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              Find Tickets to Your Next Event
            </h1>
            <form
              className="flex gap-2 w-full max-w-lg"
              onSubmit={(event) => {
                event.preventDefault();
                setPage(0);
                setSubmittedQuery(query.trim());
              }}
            >
              <Input
                className="min-w-0 flex-1 bg-white text-black"
                placeholder="Search events"
                aria-label="Search events"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit" aria-label="Search events">
                <Search />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Published Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
        {publishedEvents?.content?.map((publishedEvent) => (
          <PublishedEventCard
            publishedEvent={publishedEvent}
            key={publishedEvent.id}
          />
        ))}
      </div>

      {publishedEvents?.empty && (
        <p className="px-4 py-12 text-center text-gray-300">
          {submittedQuery
            ? "No events match your search."
            : "No published events are available right now."}
        </p>
      )}

      {publishedEvents && publishedEvents.totalPages > 1 && (
        <div className="w-full flex justify-center py-8">
          <SimplePagination
            pagination={publishedEvents}
            onPageChange={setPage}
          />{" "}
        </div>
      )}
    </div>
  );
};

export default AttendeeLandingPage;
