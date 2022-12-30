import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import feedbackfin from "feedbackfin";

hydrate(<RemixBrowser />, document, () => feedbackfin.init());
