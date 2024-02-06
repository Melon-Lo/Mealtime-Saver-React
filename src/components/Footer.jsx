import { textData } from "../data/textData"

export default function Footer() {
  const year = new Date().getFullYear()
  const { copyright, contact, link } = textData.footer

  return (
    <div id="footer">
      <p>
        {year} {copyright}
      </p>
      <a href={link} target="_blank">{contact}</a>
    </div>
  )
}