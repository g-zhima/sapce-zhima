const setFavicon = (
  emoji: string,
  offsetX: number = 0,
  offsetY: number = 50
) => {
  const canvas = document.createElement('canvas')

  canvas.height = 64
  canvas.width = 64

  const context = canvas.getContext('2d')

  if (context) {
    context.font = '50px serif'
    context.fillText(emoji, offsetX, offsetY)
  }

  const url = canvas.toDataURL()

  setFaviconFromUrl(url)
}

const setFaviconFromUrl = (url: string) => {
  const faviconEle = document.querySelector('link[rel=icon]') as HTMLLinkElement

  if (faviconEle) {
    faviconEle.href = url
  } else {
    const linkEle = document.createElement('link')
    linkEle.rel = 'icon'
    linkEle.href = url
    document.head.appendChild(linkEle)
  }
}

export default setFavicon
