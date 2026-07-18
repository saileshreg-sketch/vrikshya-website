import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function NotFound() {
  return <><SiteHeader /><main className="not-found"><p className="eyebrow eyebrow-light">404 · Page not found</p><h1>This space is still on the drawing board.</h1><Link className="button button-accent" href="/">Return home <span>→</span></Link></main><SiteFooter /></>;
}
