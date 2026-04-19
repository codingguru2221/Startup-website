import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Projects from "@/pages/Projects";
import Admin from "@/pages/Admin";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Buy from "@/pages/Buy";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import WebAppDevelopment from "@/pages/WebAppDevelopment";
import WebAppManagement from "@/pages/WebAppManagement";
import Blog from "@/pages/Blog";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();
const ADMIN_ROUTE = "/thecodex-control";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/web-app-development" component={WebAppDevelopment} />
        <Route path="/web-app-management" component={WebAppManagement} />
        <Route path="/saas-development">
          {() => <ServiceDetail slug="saas-development" />}
        </Route>
        <Route path="/business-automation">
          {() => <ServiceDetail slug="business-automation" />}
        </Route>
        <Route path="/blog" component={Blog} />
        <Route path="/services" component={Services} />
        <Route path="/services/:slug">
          {(params) => <ServiceDetail slug={params.slug} />}
        </Route>
        <Route path="/projects" component={Projects} />
        <Route path={ADMIN_ROUTE} component={Admin} />
        <Route path="/buy" component={() => <Buy mode="buy-service" />} />
        <Route path="/buy-service" component={() => <Buy mode="buy-service" />} />
        <Route path="/custom-request" component={() => <Buy mode="custom-request" />} />
        <Route path="/start-project" component={() => <Buy mode="start-project" />} />
        <Route path="/maintenance-support" component={() => <Buy mode="maintenance-support" />} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy-policy" component={Privacy} />
        <Route path="/terms-and-conditions" component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
