// const playwright = require('playwright-aws-lambda')
// const { createHash } = require('crypto')
// const fs = require('fs')
import puppeteer from 'puppeteer'
import { createHash } from 'crypto'
import fs from 'fs'

interface getOgImageProps {
  path: string
  baseUrl?: string
}
async function getOgImage({
  path,
  baseUrl = process.env.NEXTAUTH_URL
}: getOgImageProps): Promise<string> {
  const url = `${baseUrl}${path}`
  const hash = createHash('md5').update(url).digest('hex')
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--window-size=1200,630']
  })

  const ogImageDir = './public/images/og'
  const imagePath = `${ogImageDir}/${hash}.png`
  const publicPath = `${baseUrl}/images/og/${hash}.png`

  try {
    fs.statSync(imagePath)
    return publicPath
  } catch (error) {
    // file does not exists, so we create it
  }

  fs.mkdirSync(ogImageDir, { recursive: true })

  const page = await browser.newPage()
  await page.setViewport({
    width: 1200,
    height: 630
  })

  await page.goto(url, { waitUntil: 'networkidle2' })
  await page.screenshot({ path: imagePath, type: 'png' })

  await browser.close()

  return publicPath
}
export default getOgImage
