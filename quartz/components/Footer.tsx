import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer className="w-full text-center py-4 text-sm text-gray-500">
  All the best!!{' '}
  <a
    href="https://notz-repoz.vercel.app/You-can-contact-me-here"
    className="text-blue-500 underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    Click me if you have doubts
  </a>
</footer>

    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
