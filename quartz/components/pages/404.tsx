import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1>Oooopss!!</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href="#">I guess this page has not been written yet or I just forgot to</a>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
