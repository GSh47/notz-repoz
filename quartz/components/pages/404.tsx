import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
  <article className="popover-hint">
    <h1>Oops, there's nothing here.. I must have forgotten to write it </h1>
  </article>
)
}

export default (() => NotFound) satisfies QuartzComponentConstructor
