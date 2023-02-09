import { version } from '../package.json'
export const getReleaseTag = () => {
  const releaseTag = `v${version}`
  const tagLineParagragh = document.querySelector('div.VPHero.has-image.VPHomeHero > div > div.main > p.text')
  const docsReleaseTagSpan = document.createElement('samp')
  docsReleaseTagSpan.classList.add('release-tag')
  docsReleaseTagSpan.innerText = releaseTag
  tagLineParagragh?.appendChild(docsReleaseTagSpan)
}
