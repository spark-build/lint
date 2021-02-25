import * as path from 'path'
import * as fs from 'fs-extra'

export const outputFile = async ({
  name,
  absFilePath,
}: {
  name: string
  absFilePath: string
}) => {
  if (fs.existsSync(absFilePath)) {
    return undefined
  }

  return fs.outputFile(
    absFilePath,
    await fs.readFile(path.join(__dirname, `tpl/${name}.tpl`))
  )
}

export const generateFiles = (rootDir: string, files: string[] | true) => {
  const resolveFullPath = (filePath: string) => path.join(rootDir, filePath)
  const getOutputFileOption = (name: string) => {
    const absFilePath = resolveFullPath(name)

    return {
      name,
      absFilePath,
    }
  }

  const needGenerateFileType = Array.isArray(files)
    ? files
    : ['eslint', 'prettier', 'stylelint']

  return Promise.all(
    needGenerateFileType.map(async (name) =>
      Promise.all(
        [
          getOutputFileOption(`.${name}rc.js`),
          getOutputFileOption(`.${name}ignore`),
        ].map((opt) => outputFile(opt))
      )
    )
  )
}
