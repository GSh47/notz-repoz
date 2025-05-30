import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

   return (
  <article className="popover-hint">
    <h1>Oops!! :(</h1>
    <p>I haven't written this part yet! or just forgotten.. </p>
  </article>
)
}


export default (() => NotFound) satisfies QuartzComponentConstructor
